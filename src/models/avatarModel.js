const Sequelize = require("sequelize");
const db = require("../settings/databaseConnection");
const Users = require("./userModels");

const Avatar = db.define("avatar", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  filePath: {
    type: Sequelize.STRING,
  },
});

Avatar.Users = Avatar.belongsTo(Users)

module.exports = Avatar;