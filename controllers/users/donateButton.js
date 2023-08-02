/*  import mercadopago from "mercadopago";
 import cors from 'cors' //modulo para permitir origenes cruzados (front con el back)
 import express from 'express';
 import logger from 'morgan';
 

 mercadopago.configure({
    access_token:"TEST-6229918934096763-072516-e373024b9ef033c06fd1c6303a2ead52-1433441654"})

    let app = express();

    app.use(cors()) //obliga al servidor a permitir el cruce de origenes de front/back
app.use(logger('dev')); //obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json()); //obliga al servido a transformar/manejar formato json (post/put)
app.use(express.urlencoded({ extended: false })); //obliga al servidor a acceder a consultas complejas (permite leer queries y params de una peticion)


// app.post() //Solo responde a peticiones POST
 let mercapago = app.post("/create_preference",(req,res)=>{
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
export default mercapago */