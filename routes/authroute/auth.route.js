
import { Router } from "express"
import {  RegisterUser } from "../../controllers/auth/Register.controller.js"
import { LoginUser } from "../../controllers/auth/Login.controller.js"

const Authroute=Router()
Authroute
.post("/register",RegisterUser)
.post("/login",LoginUser)
export default Authroute