require("dotenv").config();

module.exports = {
  JWT_SECRET: "test",
  JWT_SECRET: process.env.JWT_SECRET,
};
