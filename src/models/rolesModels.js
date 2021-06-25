const Sequelize = require("sequelize");
const db = require("../settings/databaseConnection");

const Roles = db.define("roles", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Roles;
