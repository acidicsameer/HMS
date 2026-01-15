import { Router } from "express";
import CatchAsync from "../../utils/asynchandler.js";
import { AddRoom, DeleteRoom, getRooms, getSingleRoom, UpdateRoom } from "../../controllers/Room/room.controller.js";
const RoomRoute=Router()
RoomRoute.route("/room")
.post(AddRoom)
.get(getRooms)
RoomRoute.route("/room/:id")
.get(getSingleRoom)
.delete(DeleteRoom)
.patch(UpdateRoom)
export default RoomRoute