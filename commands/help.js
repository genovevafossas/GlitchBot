const {HelpMessage} = require ("./../dialogue.json");

exports.run = (bot, message, args) => {
    message.channel.send("The current commands are as follows: \n```" + HelpMessage + "```");
}