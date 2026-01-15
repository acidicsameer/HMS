import Room from "../../models/room.model.js";

export const AddRoom = async (req, res) => {
  const {
    roomName,
    roomType,
    price,
    bed,
    roomdescription,
    roomstatus,
    roomfacilities,
  } = req.body;
  if (
    !roomName ||
    !roomType ||
    !price ||
    !bed ||
    !roomdescription ||
    !roomstatus ||
    !roomfacilities
  ) {
    return res.json({
      message: "provide required fields ",
    });
  }
  const data = await Room.create({
    roomName,
    roomType,
    price,
    bed,
    roomdescription,
    roomstatus,
    roomfacilities,
  });
  if (!data) {
    return res.json({
      message: "no data found ",
    });
  }
  res.status(201).json({
    message: "successfully added a room ",
    data,
  });
};
export const getRooms = async (req, res) => {
  const data = await Room.find({});
  if (data.length == 0) {
    res.status(500).json({
      message: "no room found ",
    });
  }
  res.status(200).json({
    message: "Rooms fetched successfully ",
    data,
  });
};
export const getSingleRoom = async (req, res) => {
  const id = req.params.id;

  const data = await Room.findOne({ _id: id });
  console.log(data);
  if (!data) {
    return res.status(500).json({
      message: "no rooms found ",
    });
  }
  res.status(200).json({
    message: "Room fetched successfully ",
    data,
  });
};
export const DeleteRoom = async (req, res) => {
  const id = req.params.id;

  const data = await Room.findByIdAndDelete({ _id: id });
  console.log(data);
  if (!data) {
    return res.status(500).json({
      message: "no room found on provided id ",
    });
  }
  res.status(200).json({
    message: "Room removed successfully ",
    data: null,
  });
};
export const UpdateRoom = async (req, res) => {
  const {
    roomName,
    roomType,
    price,
    bed,
    roomdescription,
    roomstatus,
    roomfacilities,
  } = req.body;
  const id = req.params.id;
  const data = await Room.findByIdAndUpdate(
    { _id: id },
    {
      roomName,
      roomType,
      price,
      bed,
      roomdescription,
      roomstatus,
      roomfacilities,
    },
    { new: true, runValidators: true }
  );
  if (!data) {
    return res.json({
      message: "no room found ",
    });
  }
  res.status(200).json({
    message: "successfully updated a room ",
    data,
  });
};
