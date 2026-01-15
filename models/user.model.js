import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  phone: {
    type: String,
  },
  dob: {
    type: Date,
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
