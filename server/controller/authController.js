const authModel = require("../model/authModel");
const hashPassword = require("../config/authHelper");
const JWT = require("jsonwebtoken");

const singupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(401).send({
        success: false,
        message: "All details are required",
      });
    }

    const user = await authModel.findOne({ email });
    if (user) {
      return res.status(500).send({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await new authModel({
      username,
      email,
      password: hashedPassword,
    }).save();

    return res.status(200).send({
      success: true,
      message: "User account has been crerated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in user API",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).send({
        success: false,
        message: "Please Enter your details",
      });
    }

    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User is not register",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid Details",
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "User has been login successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in User login  API",
    });
  }
};

module.exports = {
  singupController,
  loginController,
};
