const {Quotes} = require("./../dialogue.json");

//prints a random quote from the array of strings above.
exports.run = (bot, message, args) => {

    var selected = Quotes[Math.floor(Math.random()*Quotes.length)];
    message.channel.send(selected).catch(bot.error);
}