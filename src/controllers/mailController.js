const mailService = require("../services/mailService");
const { config } = require("../config/config");
const path = require("path");

const sendMail = async (req, res, next) => {
  try {
    const { info } = req.body;
    console.log(info)
    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendMail,
};
