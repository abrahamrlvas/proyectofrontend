const Users = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginController {
  async authRegister(req, res) {
    try {
      const { username, email, password } = req.body;
      if (await Users.findOne({ where: { username } })) {
        res.status(201).json({ message: `El usuario ${username} ya existe` })
      }
      const hashPassword = await bcrypt.hash(password, 10);
      await Users.create({
        username,
        email,
        password: hashPassword,
      })
        .then((data) => {
          res.status(200).json({ message: "Usuario registrado correctamente", data })
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
              email: user.email
            }, process.env.AUTH_SECRET, {
              expiresIn: process.env.AUTH_EXPIRE
            })
            res.json({ user, token })


          } else {
            res.status(201).json({ message: "Contraseña invalida", token })
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

module.exports = new LoginController();