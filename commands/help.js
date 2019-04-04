const {HelpMessage} = require ("./../dialogue.json");

exports.run = (bot, message, args) => {
    message.channel.send(HelpMessage);
}