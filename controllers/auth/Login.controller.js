import User from "../../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generateToken.js";
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

  const MatchedPassword = await bcrypt.compare(password, dbPass);
  if (MatchedPassword) {
     const id=UserExists._id
    const token = generateToken({id});
    console.log("tokenid", token);
    res.status(200).json({
      message: `Successfully logged in user :${UserExists.name} `,
      data: token,
    });
  }
};
