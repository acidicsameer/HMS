/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import { dbConn } from "./database/dbConn.js";
import RoomRoute from "./routes/adminroutes/room.route.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(RoomRoute)






dbConn();
app.listen(port, () => {
  console.log(`server Started successfully at ${port}`);
});
