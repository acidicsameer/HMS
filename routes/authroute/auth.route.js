
import { Router } from "express"
import { LoginUser, RegisterUser } from "../../controllers/auth/Register.controller.js"

const Authroute=Router()
Authroute
.post("/register",RegisterUser)
.post("/login",LoginUser)
export default Authroute