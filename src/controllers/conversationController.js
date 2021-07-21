const Conversation = require("../models/conversationModels");
const User = require("../models/userModels");
const { Op } = require("sequelize");

class ConversationController {
  async createConversation(id, to, sen) {
    console.log('recibido id', id);
    console.log(to);
    console.log(sen);
    const search = await Conversation.findAll({
      where: {
        personTo: to,
        personSen: sen
      },
    });
    const data = search.length < 1
    if (data) {
      const conversation = await Conversation.create({
        id,
        personSen: sen,
        personTo: to,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return conversation;
    }
  }

  async getConversation(req, res) {
    const { username } = req.body;
    await Conversation.findAll({
      where: {
        personSen: username
      }
    }).then(async (data) => {
      console.log(data[0].personSen);
      console.log('data', data[0].personTo)
      console.log('data', data[0].personSen)
      const users = await User.findAll({
        where:{
          username: {
            [Op.or]: [data[0].personSen, data[0].personTo]
          }
        }
      })
      res.json({ data, users })
    })
  }
}

module.exports = new ConversationController();