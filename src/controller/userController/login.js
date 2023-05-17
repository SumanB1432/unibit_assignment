const jwt = require("jsonwebtoken");
const {validateLogin} = require("../../validation");
const userModel = require("../../model/userModel")

const loginUser = async function (req, res) {
  try {
    let data = req.body;

    const { error, value } = validateLogin(data);

    if (error) {
      return res.status(400).send(error.details);
    }

    let checkedUser = await userModel.findOne({
      email: data.email,
      password: data.password,
    });
    if (!checkedUser) {
      return res
        .status(401)
        .send({ status: false, message: "email or password is not correct" });
    }
    let date = Date.now();
    let createTime = Math.floor(date / 1000);
    let expTime = createTime + 3000;

    let token = jwt.sign(
      {
        userId: checkedUser._id.toString(),
        iat: createTime,
        exp: expTime,
      },
      "assignment_unibit_sumanBera"
    );

    res.setHeader("x-api-key", token);
    return res
      .status(200)
      .send({ status: true, message: "Success", data: { token: token } });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports.loginUser = loginUser;
