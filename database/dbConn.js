/* eslint-disable no-undef */
import mongoose from "mongoose";  
import dotenv from 'dotenv'
dotenv.config()
export const dbConn=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI) 
    console.log("mongodb connected successfully ")
} catch (error) {
    console.log("error occured on mongodb connection ",error.message)
    
}
}