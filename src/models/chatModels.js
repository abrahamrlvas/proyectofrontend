const Sequelize = require("sequelize");
const db = require("../settings/databaseConnection");

const Message = db.define("messages", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  message: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Message;