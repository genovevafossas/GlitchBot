//array of greetings imported from dialogue for when the bot is called by name.
const {Greetings} = require("./../dialogue.json");

module.exports = (bot, message) => {
    //ignore all bots.
    if (message.author.bot) return;

    //if the prefix isn't right for a command, check for other events.
    if(message.content.indexOf(bot.config.prefix) !== 0) {

        //adressing bot by name, ignoring any capitalization through reg expression
        if (message.content.match(/(?<!(\w|[\/]))(GlitchBot)(?!(\w|[\/]))/)) {
            //randomly selects a greeting from the above 
            var selected = Greetings[Math.floor(Math.random()*Greetings.length)];
            message.channel.send(selected).catch(bot.error);
        }
        return;
    }
    //loads commands.
    else {
        const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        //grab the command data from the bot.commands emap
        const cmd = bot.commands.get(command);

        //Prints to console and exits if command doesn't exit.
        if (!cmd) {
            console.log("Command doesn't exist.");
            return;
        }

        cmd.run(bot, message, args);
    }
}
