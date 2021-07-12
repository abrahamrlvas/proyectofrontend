const User = require('../models/userModels');

class Users {
  async getUsersAll(req, res){
    const user = await User.findAll();
    res.json(user)
  }
}

module.exports = new Users();