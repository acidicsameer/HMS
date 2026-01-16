import jwt from 'jsonwebtoken'
import { secretkey } from '../config/secrets.js'

export const isAuth=async(req,res,next)=>{
 const token =req.headers.authorization
  const decoded =jwt.verify(token,secretkey)
  req.user=decoded
  console.log(decoded)
  next()
} 