import { connect } from "mongoose";
connect(process.env.LINK_DB)            //conecto con el link de la base de datos guardado en la variable de entorno del archivo
.then(()=> console.log("connected to data base"))
.catch((error)=>console.log(error))
