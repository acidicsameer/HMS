import Room from "../../models/room.model.js"

 export const addRoom=async(req,res)=>{
const{roomNumber,roomType,price,bed,roomdescription,roomstatus,roomfacilities}=req.body 
if(!roomNumber || !roomType || !price || !bed || !roomdescription || !roomstatus || !roomfacilities){
    return res.json({
        message:"provide all the details of the room "
    })
} 
const data =await Room.create({
    roomNumber, 
    roomType, 
    price, 
    bed, 
    roomdescription, 
    roomstatus, 
    roomfacilities

}) 
if(!data){
    return res.status(500).json({
        message:"cannot add room to the hotel "
    })
} 
res.status(201).json({
    message :"successfully addded a room ", 
    data
})
}