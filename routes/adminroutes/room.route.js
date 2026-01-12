import { Router } from "express";
import { addRoom } from "../../controllers/admin/room.controller.js";
import CatchAsync from "../../utils/asynchandler.js";
const RoomRoute=Router()
RoomRoute.post("/room",CatchAsync(addRoom)) 
export default RoomRoute