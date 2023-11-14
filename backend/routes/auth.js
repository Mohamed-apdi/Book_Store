//Login Router
const router = require("express").Router();
const { User } = require("../model/user")
const Joi = require("joi");
const bcrypt = require("bcryptjs")

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    // console.log("User found in the database:", user);
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // console.log("Password comparison result:", validPassword);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = user.generateAuthToken();
    // res.status(200).send({ data: token, message: "Logged in successfully" });
    res.status(200).send({ token: token, message: "Logged in successfully" });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
})


const validate = (date) => {
  const Schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password")
  })
  return Schema.validate(date)
}
module.exports = router