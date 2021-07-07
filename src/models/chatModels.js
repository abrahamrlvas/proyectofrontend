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
});

module.exports = Message;