import { Router } from "express";
import read from '../controllers/authors/read.js'

const author_router = Router()

//author_router.post() //enviar datos al servidor y crear autor
author_router.get(
    '/',read )  
//para obtener o leer(todos o solo uno)
//author_router.put()  //para actualizar un autor
//author_router.delete() //para eliminar un autor

export default author_router