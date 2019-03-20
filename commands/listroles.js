exports.run = (bot, message, args) => {

    //creates a string to concatenate all the roles to.
    var roleMessage = "The roles currently available to be added: ```\n";

    //creates a seperate map to contain the map of roles as well as 
    //botRole const for easy refrence later
    const map = message.guild.roles.map(role => role.name);
    const botRole = message.guild.roles.find(r => r.name == "GuyBot");

    //Iterates through every pair in the roles map, only printing those that have lower precedence than
    //the bot's role, as the bot can only add those roles.
    for (const [key, value] of Object.entries(map)) {
        const currRole = message.guild.roles.find(r => r.name == value);
        if (currRole.position < botRole.position && value != "@everyone") {
            roleMessage = roleMessage.concat(value + "\n");
        }
    }

    //concats the terminating sequence for the discord markdown formatting for blocks.
    roleMessage = roleMessage.concat("```");

    //sends the message.
    message.channel.send(roleMessage);
}