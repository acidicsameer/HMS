import mongoose from "mongoose";
const BookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },

  checkOutDate: {
    type: Date,
    required: true,
  },

  numberOfGuests: {
    type: Number,
    required: true,
    min: 1,
  },

  totalprice: {
    type: Number,
  },
  bookingStatus: {
    type: String,
    enum: ["booked", "checked-in", "checked-out", "cancelled"],
    default: "booked",
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },

  paymentMethod: {
    type: String,
    enum: ["cash", "card", "khalti", "esewa"],
  },
},
{
    timeStamps:true
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
