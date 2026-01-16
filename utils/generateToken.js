import jwt from "jsonwebtoken";
import { secretkey } from "../config/secrets.js";

export const generateToken = (id) => {
  try {
    const token = jwt.sign(
      id  ,       
      secretkey,           
      { expiresIn: "7d" }  
    );
    
    return token;
    
  } catch (err) {
    console.log("Error generating token:", err);
    throw err;
  }
};