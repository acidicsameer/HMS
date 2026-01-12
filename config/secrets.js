/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config()
export const mongodburl=process.env.MONGO_URI
export const port=process.env.PORT