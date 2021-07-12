const User = require("../models/userModels");
const isAdmin = (req, res, next) => {
  User.findByPk(req.user).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res
        .status(403)
        .send({
          message: "Se requiere el rol de administrador!",
      });
      return;
    });
  });
};

module.exports = isAdmin;
