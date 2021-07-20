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
  receiver: {
    type: Sequelize.STRING,
  },
  sender: {
    type: Sequelize.STRING,
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
});

module.exports = Message;
