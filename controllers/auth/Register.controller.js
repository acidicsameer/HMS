import User from "../../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generateToken.js";
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
export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({
      message: "provide required fields ",
    });
  }
  const UserExists = await User.findOne({ email }).select("+password");
  if (!UserExists) {
    return res.json({
      message: "User is not registered ",
    });
  }
  const dbPass = UserExists.password;
  console.log(dbPass);
  const userid = UserExists._id;
  const MatchedPassword = await bcrypt.compare(password, dbPass);
  if (MatchedPassword) {
    const token = generateToken({ userid });
    console.log("tokenid", token);
    res.status(200).json({
        message:`Successfully logged in user :${UserExists.name} `,
        data:token
    })
  }
   
};

