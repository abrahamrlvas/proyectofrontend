const Message = require("../models/chatModels");
const { Op } = require("sequelize");

class MessageController {
  async getMessage(req, res) {
    const messages = await Message.findAll({
      include: [
        {
          association: Message.Users,
        },
      ],
      order: [["createdAt", "ASC"]],
    });
    res.status(200).json(messages);
  }

  async getMessagePrivate(req, res) {
    const { receiver, sender } = req.body;
    try {
      const messages = await Message.findAll({
        where: {
          receiver: {
            [Op.or]: [receiver, sender],
          },
          sender: {
            [Op.or]: [sender, receiver],
          },
        },
      });
      res.json(messages);
    } catch (error) {
      console.log(error);
    }
  }

  async getFindMessage(req, res) {
    const { receiver, sender } = req.body;
    await Message.findOne({
      limit: 1,
      where: {
        receiver: {
          [Op.or]: [receiver, sender],
        },
        sender: {
          [Op.or]: [sender, receiver],
        },
      },
      order: [["createdAt", "DESC"]],
    });
  }
}

module.exports = new MessageController();
