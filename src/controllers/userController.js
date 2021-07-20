const User = require("../models/userModels");

class Users {
  async getUsersAll(req, res) {
    const { username } = req.body;
    const user = await User.findAll({
      where: {
        username
      }
    });
    res
      .status(200)
      .json(user);
  }
};

module.exports = new Users();
