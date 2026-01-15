/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config()
export const mongodburl=process.env.MONGO_URI
export const port=process.env.PORT
export const saltValue=process.env.SALT_ROUNDS
export const secretkey=process.env.SECRET_KEY