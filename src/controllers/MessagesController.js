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
}

module.exports = new MessageController();
