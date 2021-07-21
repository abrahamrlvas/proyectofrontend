const Sequelize = require("sequelize");
const db = require("../settings/databaseConnection");

const Conversation = db.define("conversations", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  personSen: {
    type: Sequelize.STRING,
  },
  personTo: {
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

module.exports = Conversation;
