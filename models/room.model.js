import mongoose from "mongoose";
const RoomSchema = mongoose.Schema({
  roomNumber: String,
  roomType: {
    type: String,
    enum: ["Single", "Double", "Deluxe", "Suite"],
  },
  price:{
    type:Number
  },
  bed: {
    type: {
      type: String,
      enum: ["Single", "Double", "Queen", "King"],
    },
    size: String,
    noofbed: Number,
  },
  roomdescription: {
    type: String,
  },
  roomstatus: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
  roomfacilities: {
    type: String,
  },
});
 
const Room=mongoose.model("Room",RoomSchema)
export default Room
