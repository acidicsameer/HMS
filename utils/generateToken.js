import jwt from "jsonwebtoken";
import { secretkey } from "../config/secrets.js";

export const generateToken = (userid) => {
  try {
    const token = jwt.sign(
      { userid },          
      secretkey,           
      { expiresIn: "7d" }  
    );
    
    return token;
    
  } catch (err) {
    console.log("Error generating token:", err);
    throw err;
  }
};