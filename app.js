/* eslint-disable no-undef */
import express from "express";
import { dbConn } from "./database/dbConn.js";
import RoomRoute from "./routes/adminroutes/room.route.js";
import { port } from "./config/secrets.js";
const app = express();

app.use(express.json());
app.use(RoomRoute);

dbConn();
app.listen(port, () => {
  console.log(`server Started successfully at ${port}`);
});
