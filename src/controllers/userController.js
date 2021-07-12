const User = require("../models/userModels");

class Users {
  async getUsersAll(req, res) {
    const user = await User.findAll();
    res
      .status(200)
      .json(user);
  }
};

module.exports = new Users();
