module.exports = (bot) => {
    //prints to console when bot is ready and functioning.
    console.log("Ready.");
    //sets "playing" message to directions for new users.
    bot.user.setActivity('type !help for commands!');
}