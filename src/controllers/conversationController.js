const Conversation = require("../models/conversationModels");
const User = require("../models/userModels");
const Message = require("../models/chatModels");
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
       await User.findAll({
        where:{
          username: {
            [Op.or]: [data[0].personSen, data[0].personTo]
          }
        }
      }).then(async (users) => {
        const messageTime = await Message.findOne({
          limit: 1,
          where: {
            receiver: {
              [Op.or]: [data[0].personSen, data[0].personTo],
            },
            sender: {
              [Op.or]: [data[0].personSen, data[0].personTo],
            },
          },
          order: [["createdAt", "DESC"]],
        })
        res.json({data, users, messageTime})
      })
    })

  }
}

module.exports = new ConversationController();