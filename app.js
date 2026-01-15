/* eslint-disable no-undef */
import express from "express";
import { dbConn } from "./database/dbConn.js";
import { port } from "./config/secrets.js";
import Authroute from "./routes/authroute/auth.route.js";
const app = express();
app.use(express.json());
app.use("/api/v1/auth",Authroute)

dbConn();
app.listen(port, () => {
  console.log(`server Started successfully at ${port}`);
});
