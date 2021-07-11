const Sequelize = require("sequelize");
const db = require("../settings/databaseConnection");
const Roles = require("./rolesModels");
const Message = require("./chatModels");

const Users = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  filePath: {
    type: Sequelize.STRING,
  }
});

Roles.belongsToMany(Users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

Users.belongsToMany(Roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

Message.Users = Message.belongsTo(Users)

module.exports = Users;
