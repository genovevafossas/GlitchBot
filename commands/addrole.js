/*
Be sure that you place the bot's role just below the roles you don't want users to assign/remove themselves.
This assures that the bot can assign and remove the proper roles.
*/

exports.run = (bot, message, args) => {

    //joins the array of strings given in the arguments to a single string for usage in finding the role.
    var name = args.join(' ');

    //Attempts to find role from guild.
    const desiredRole = message.guild.roles.find(r => r.name == name);
    const botRole = message.guild.roles.find (r => r.name == "GlitchBot");
    
    //Checks if the role that the user is attempting to add exists, if not, then return.
    if (!desiredRole) {
        return message.reply("That is not a role in this server. Please try again.");
    }

    //Checks if the role is of a higher precedence than the bot's own role,
    //as the bot cannot manage roles higher than its own.
    if (desiredRole.position > botRole.position) {
        return message.reply("I was unable to add the role `" + desiredRole.name +"`.");
    }

    //Informs the user if they already have that role, then returns.
    if (message.member.roles.has(desiredRole.id)) {
        return message.reply("You already have that role.");
    }

    //Adds the role.
    message.member.addRole(desiredRole.id).catch(bot.error);
    return message.reply (" role `" + desiredRole.name + "` successfully added.");
}