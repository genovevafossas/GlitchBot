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
  - Regardless of capitalization (handled by a regular expression) the bot will respond to "glitchbot" with one of the designated phrases indicated in the file.

### Some Considerations
#### Roles
For !addrole and !removerole to not allow unathorized modification of roles by a user, be sure that the bot's role has a lower position than those you do not want users to modify themselves. (see Part Two: Role Hierarchies [here](https://support.discordapp.com/hc/en-us/articles/214836687-Role-Management-101))
