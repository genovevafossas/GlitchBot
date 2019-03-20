const Discord = require('discord.js');
const {token} = require ('./config.json');
const config = require('./config.json');
const Enmap = require("enmap");
const fs = require("fs");


const bot = new Discord.Client();
bot.config = config;

//reads the events directory's files, calling each event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      bot.on(eventName, event.bind(null, bot));
    });
  });
  
  //enmap for storing commands
  bot.commands = new Enmap();
  
  //reads the command directory's files, adding them to the enmap.
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      bot.commands.set(commandName, props);
    });
  });
  

bot.login(token);