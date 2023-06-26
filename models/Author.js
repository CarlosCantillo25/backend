import { Schema, model,Types } from "mongoose";


let collection = 'authors'

let schema = new Schema({       //defino el primer objeto con las propiedades necesarias para el modelo
    name:{type:String, required:true },
    last_name:{type:String},
    city:{type:String,required:true},
    country:{type:String, required:true},
    date:{type:Date},
    photo:{type:String,required:true},
    user_id:{
        type:Types.ObjectId,  //tipo de dato especial de mongo, guarda la informacion encriptada del documento.
        ref:'users',  //ref nombre de la collection a la cual se quiere referenciar/relacionar
        required:true
    },
    
    active:{type:Boolean, default:false} // default es un parametro 

},{                            //timestamps propiedades de tiempo
    timestamps:true
})
const Author =model(collection, schema)
export default Author