# GlitchBot
A Discord chat bot. I created this bot to primarily learn and become more familiar with JavaScript and Node.js.

## Resources

This bot primarily uses discord.js and node.js.

Along the way, the guide posted on "An Idiots Guide" was incredibly helpful to me, and you can find that guide [here](https://anidiots.guide/first-bot/your-first-bot). I used their method for implementing the commands and events, as commando was a bit too much to chew.

The [enmap](https://www.npmjs.com/package/enmap) package was also integral to making this bot possible.

## Functionality
This command utilizes reading files in directories named ./commands/ and ./events/ and storing them in an emap for later usage or setting the bot to run the file on a certain command.

### Commands
The commands implemented are as follows: 
- !help
  - Basic help command. Lists available commands.
- !addrole
  - Adds a role that is able to be self added (determined by position) to a user.
- !removerole
  - Removes a role that is able to be self-removed (also determined by position) to a user.
- !listroles
  - Lists roles that are able to be self added.
- !quote
  - Sends a random quote from the list of quotes in the file.

### Message Replies
The bot also responds to certain phrases in messages. The bot responds to:
- Its name
  - Bot will respond to "GlitchBot" with exact capitalization and when it is mentioned as it own word.
  - Regular expression uses a negative lookahead and a negative lookbehind to filter out situations in which the bot will respond.
    - Negative lookahead
      - Will allow a match if the word "GlitchBot" isn't preceded by [0-9], [a-z], [A-Z] or _. I also added / into what will be recognized as something that can't proceed the word, in order to avoid matching of links and custom emojis in the discord server.
    - Negative lookbehind
      - Same as above, only it checks what the word is succeded by.

### Some Considerations
#### Roles
For !addrole and !removerole to not allow unathorized modification of roles by a user, be sure that the bot's role has a lower position than those you do not want users to modify themselves. (see Part Two: Role Hierarchies [here](https://support.discordapp.com/hc/en-us/articles/214836687-Role-Management-101))
