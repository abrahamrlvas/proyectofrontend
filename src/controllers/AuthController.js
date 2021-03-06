const Users = require("../models/userModels");
const Role = require("../models/rolesModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

class AuthController {
  async authRegister(req, res) {
    try {
      const { username, email, password } = req.body;
      let roles = JSON.parse(req.body.roles);
      if (await Users.findOne({ where: { username } })) {
        res.status(201).json({ message: `El usuario ${username} ya existe` });
      }
      const filePath = `${req.file.originalname}`;
      const hashPassword = await bcrypt.hash(password, 10);
      await Users.create({
        username,
        email,
        password: hashPassword,
        filePath,
      })
        .then((user) => {
          if (roles) {
            Role.findAll({
              where: {
                name: {
                  [Op.or]: roles,
                },
              },
            }).then((roles) => {
              user.setRoles(roles).then(() => {
                res
                  .status(200)
                  .send({ message: "Usuario registrado correctamente!", user });
              });
            });
          } else {
            user.setRoles([1]).then(() => {
              res
                .status(200)
                .send({ message: "Usuario registrado correctamente!", user });
            });
          }
        })
        .catch((error) => {
          const res = { success: false, error: error };
          return res;
        });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async authLogin(req, res) {
    let token = null;
    try {
      const { username, password } = req.body;
      await Users.findOne({
        where: {
          username: username,
        },
      })
        .then((user) => {
          if (!user) {
            res
              .status(201)
              .json({ message: "Email o contraseña invalida", token });
          } else {
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (comparePassword) {
              token = jwt.sign(
                {
                  userId: user.id,
                  username: user.username,
                  email: user.email,
                  avatar: user.filePath,
                },
                process.env.AUTH_SECRET,
                {
                  expiresIn: process.env.AUTH_EXPIRE,
                }
              );
              let authorities = [];
              user.getRoles().then((roles) => {
                for (let i = 0; i < roles.length; i++) {
                  authorities.push(roles[i].name);
                }
                res.status(200).send({
                  roles: authorities,
                  accessToken: token,
                });
              });
            } else {
              res.status(201).json({ message: "Contraseña invalida", token });
            }
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
