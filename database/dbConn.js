/* eslint-disable no-undef */
import mongoose from "mongoose";

import { mongodburl } from "../config/secrets.js";

export const dbConn = async () => {
  try {
    await mongoose.connect(mongodburl);
    console.log("mongodb connected successfully ");
  } catch (error) {
    console.log("error occured on mongodb connection ", error.message);
  }
};
