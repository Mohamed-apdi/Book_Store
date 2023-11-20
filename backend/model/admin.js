const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")
const crypto = require("crypto");
const jwtSecretKey = crypto.randomBytes(32).toString("hex");
process.env.JWTPRIVATEKEY = jwtSecretKey;


const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

adminSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    return token;

  } catch (error) {
    console.error("JWT Token generation error:", error);
    throw error;
  }
};


const Admin = mongoose.model("admin", adminSchema);

const validate = (data) => {
    const Schema = Joi.object({
      name: Joi.string().required().label("Name"),
      email: Joi.string().email().required().label("Email"),
      password: passwordComplexity().required().label("Password"),
    });
    return Schema.validate(data)
}

module.exports = { Admin, validate };