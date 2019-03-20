const Quotes = [
    "\“Music is enough for a lifetime, but a lifetime is not enough for music.\” ― Sergei Rachmaninov",

    "\"Technology is an interesting subject, people thinking: how much good, and how much bad, does it inherently carry?\" - Thomas Bangalter",

    "\"The spirit of house music, electronic music, in the beginning was to nreak the rules, to do things in many different ways.\" - Thomas Bangalter",

    "\"A cello was there 400 years ago and will still be here in 400 years.\" - Thomas Bangalter",

    "\"Technology is fascinating.\" - Thomas Bangalter"
]

//prints a random quote from the array of strings above.
exports.run = (bot, message, args) => {

    var selected = Quotes[Math.floor(Math.random()*Quotes.length)];
    message.channel.send(selected).catch(bot.error);
}