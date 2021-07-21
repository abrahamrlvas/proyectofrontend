const Conversation = require("../models/conversationModels");

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
}

module.exports = new ConversationController();