var helpText = 
    "!help - displays all commands.\n" +
    "!addrole [role name] - gives you the specified role.\n" +
    "!removerole [role name] - removes the specified role from you.\n" +
    "!listroles - sends a list of roles that can be added by !addrole.\n"
    "!quote - sends a random quote."

exports.run = (bot, message, args) => {
    message.channel.send("The current commands are as follows: \n```" + helpText + "```");
}