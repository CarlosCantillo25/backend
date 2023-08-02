import 'dotenv/config.js' //configurar las variables de entorno en la aplicacion
import './config/db.js'
import express from 'express'; //modulo necesario para levantar y confgurar un servidor
import path from 'path'; //modulo necesario para conocer la ubicacion de nuestro servidor
import logger from 'morgan'; //modulo necesario para registrar las peticiones que se realizan al servidor
import {__dirname} from './utils.js' //importo la configuracion de la ruta padre
import indexRouter from './routes/index.js'; //enrutador principal de la aplicacion
import cors from 'cors' //modulo para permitir origenes cruzados (front con el back)
import notFoundHandler from './middlerwares/notFoundHandler.js';
import errorHandler from './middlerwares/errorHandler.js';

import mercadopago from 'mercadopago';
let app = express(); //defino una variable con la ejecucion del modulo de express para poder crear un servidor

//VIEWS
//set es un metodo que configura algo 
app.set('views', path.join(__dirname, 'views')); //configuro que las vistas generadas en el backend estan en la carpeta views
app.set('view engine', 'ejs'); //configuro que las vistas se van a definir con el lenguaje EJS (motor de plantilla)

mercadopago.configure({
    access_token:"TEST-6229918934096763-072516-e373024b9ef033c06fd1c6303a2ead52-1433441654"
})
//MIDDLEWARES
//son funciones que se ejecutan con cada peticion y que van a perimitir o no realizar algo
//use es un metodo que obliga a (en este caso) a mi aplicaion a usar algo (ejecutar una funcion)
app.use(cors()) //obliga al servidor a permitir el cruce de origenes de front/back
app.use(logger('dev')); //obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json()); //obliga al servido a transformar/manejar formato json (post/put)
app.use(express.urlencoded({ extended: false })); //obliga al servidor a acceder a consultas complejas (permite leer queries y params de una peticion)
app.use(express.static(path.join(__dirname, 'public'))); //obliga al servidor a generar una carpeta de acceso publico

// app.post() //Solo responde a peticiones POST
app.post("/create_preference",(req,res)=>{
    let preference ={
        items:[
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity)
            }
        ],
        back_urls:{
            success: "http://localhost:5173/donate",
            failure: "http://localhost:5173/donate",
            pending: "http://localhost:5173/donate"
        },
        auto_return: "approved",
    };
    mercadopago.preferences
        .create(preference)
        .then(function(response){
            res.json({
                id: response.body.id
            });
        })
        .catch(function (error){
            console.log(error)
        })
})
/* app.listen(8080, ()=>{
    console.log("the server is now running on port 8080");
}) */
//app.use() //Responde ante cualquier tipo de petición


//ENDPOINTS
app.use('/api', indexRouter); //obliga al servidor a usar las rutas definidas en el enrutador principal con la palabrita '/api'

app.use(notFoundHandler)
app.use(errorHandler)

export default app; 