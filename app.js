import 'dotenv/config.js'                     //configura las variables de entorno de la aplicacion
import './config/db.js'
import express from 'express';                //modulo necesario para levantar y configurar el servidor
import path from 'path';                      //modulo necesario para conocer ubicacion de nuestro servidor
import logger from 'morgan';                  //modulo para registrar las peticiones que se realizan al servidor
import indexRouter from'./routes/index.js';  //enrutador principal de la aplicacion
import { __dirname } from './utils.js';
import cors from 'cors'
let app = express();                         //defino una variable con la ejecucion del modulo de express y creando un servidor

// view engine setup
//set es un metodo que configura algo

app.set('views', path.join(__dirname, 'views')); //configuro la carpeta donde estan las vistas generadas en el backend
app.set('view engine', 'ejs');                   //configuro que las vistas se van a definir con el lenguaje EJS(moto de plantilla)

//middlewares
//use es un metodo que obliga( em este caso)a mi aplicacion a usar algo(ejecutar una funcion)
app.use(logger('dev'));                          //obliga  al servidor a usar el middlewares de registro de peticiones
app.use(express.json());                         //obliga al servidor a transformar/manejar formato json(post/put)
app.use(express.urlencoded({ extended: false }));//obliga al servidor a acceder a consultas complejas(permite leer querys y parms de una peticion)
app.use(express.static(path.join(__dirname, 'public')));//obliga al servidor a generar una carpeta de acceso publico
app.use(cors())                                   //obliga al servidor a permitir el cruce de origenes de front/back
//endpoints
app.use('/api', indexRouter);                     //obligo alservidor a usar las rutas definidas en el enrutador principal con la palabrita /api       

export default app                           
