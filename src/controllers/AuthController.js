const Users = require('../models/userModels');
const Role = require('../models/rolesModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const randomString = require('randomstring')

class AuthController {
  async authRegister(req, res) {
    try {
      const { username, email, password, roles } = req.body;
      const data = {
        usernameData: JSON.parse(username),
        emailData: JSON.parse(email),
        passwordData: JSON.parse(password),
        rolesData: JSON.parse(roles)
      };
      console.log(data);
      const {usernameData, emailData, passwordData, rolesData} = data;

      if (await Users.findOne({ where: { username: usernameData } })) {
        res.status(201).json({ message: `El usuario ${usernameData} ya existe` })
      }
      const filePath = `${randomString.generate()}/${req.file.filename}`
      console.log(filePath);
      const hashPassword = await bcrypt.hash(passwordData, 10);
      await Users.create({
        username: usernameData,
        email: emailData,
        password: hashPassword,
        filePath
      })
        .then((user) => {
          if (rolesData) {
            Role.findAll({
              where: {
                name: {
                  [Op.or]: rolesData
                }
              }
            }).then(roles => {
              user.setRoles(roles).then(() => {
                res.status(200).send({ message: "User was registered successfully!", user });
              });
            });
          } else {
            // user role = 1
            user.setRoles([1]).then(() => {
              res.status(200).send({ message: "User was registered successfully!", user });
            });
          }
        })
        .catch((error) => {
          const res = { success: false, error: error };
          return res;
        });
    } catch (error) {
      res.status(500).json({ message: error })
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
            res.status(201).json({ message: "Email o contraseña invalida", token })
          } else {
            const comparePassword = bcrypt.compareSync(password, user.password)
            if (comparePassword) {
              token = jwt.sign({
                userId: user.id,
                username: user.username,
                email: user.email
              }, process.env.AUTH_SECRET, {
                expiresIn: process.env.AUTH_EXPIRE
              })

              let authorities = [];
              user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                  authorities.push(roles[i].name);
                }
                res.status(200).send({
                  roles: authorities,
                  accessToken: token
                });
              });

            } else {
              res.status(201).json({ message: "Contraseña invalida", token })
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