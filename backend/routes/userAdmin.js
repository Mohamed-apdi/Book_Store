//Register Router
const router = require("express").Router();
const {Admin, validate} = require("../model/admin")
const bcrypt = require("bcryptjs")

router.post("/", async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const admin = await Admin.findOne({ email: req.body.email });
      if (admin)
        return res
          .status(409)
          .send({ message: "User with given email already Exist!" });
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      await new Admin({ ...req.body, password: hashPassword }).save();
      res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      console.error(error); // Log the error to the console
      res.status(500).send({ message: "Internal Server Error" });
    }
})



router.get("/admin/user/all", async (req, res) => {
  try {
    const getUsers = await Admin.find();
    res.send(getUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;