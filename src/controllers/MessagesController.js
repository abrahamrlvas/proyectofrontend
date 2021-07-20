const Message = require("../models/chatModels");

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
    res
      .status(200)
      .json(messages);
  }

  async getMessagePrivate(req, res) {
    const { receiver, sender } = req.body
    console.log(req.body);
    const messages = await Message.findAll({
      where: {
        receiver,
        sender
      }
    })
    res.json(messages)
  }
}

module.exports = new MessageController();
