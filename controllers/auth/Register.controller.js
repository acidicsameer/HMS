import User from "../../models/user.model.js";
import bcrypt from "bcrypt";
export const RegisterUser = async (req, res) => {
  const { name, email, password, phone, dob } = req.body;
  if (!name || !email || !password || !phone || !dob) {
    return res.status(400).json({
      message: "required all fields ",
    });
  }
  const UserExists = await User.findOne({ email }).select("-password");

  if (UserExists) {
    return res.json({
      message: "User Already Registered ",
    });
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const data = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    dob,
  });
  if (!data) {
    return res.json({
      message: "No data found ",
    });
  }
  res.status(201).json({
    message: "Successfully registered a User",
    data,
  });
};


