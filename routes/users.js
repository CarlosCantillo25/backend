import {Router} from "express"
import  read  from "../controllers/users/read.js"

const auth_router= Router()

// auth_router.post()
auth_router.get( '/', read)
// auth_router.put()
// auth_router.delete()

export default auth_router