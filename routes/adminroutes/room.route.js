import { Router } from "express";
import { addRoom } from "../../controllers/admin/room.controller.js";
const RoomRoute=Router()
RoomRoute.post("/room",addRoom) 
export default RoomRoute