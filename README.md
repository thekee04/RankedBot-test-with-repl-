## NB! It's BoingK here, I've made quite a few changes to Catsobi's original code, so the stuff down below might not be completely relevant. Since I can't remember what I've done to the code, I'm sure yous can figure it out. Have fun with it, and feel free to ask me any questions on discord.

## About

A discord bot that acts as a ranked system for any game. It calculates and keeps track of player ratings within the server. It stores the database on the discord server itself via messages in two isolated channels.

Made for the FFC / SSF2 community; descendant of Boingbot.

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install discord.js @discordjs/rest discord-api-types discordjs/builders dotenv
```

### .env

You must create a .env file at the root directory with the following format and fill it with the appropriate credentials:

```
# Bot
APP_ID =                     # The Discord Application ID for the bot.
DISCORD_TOKEN =              # The bot's token.

# Guild
GUILD_ID =                   # The guild/server ID the bot will be in.
LOG_CHANNEL_ID =             # The text channel ID for log messages.
GAMES_DB_CHANNEL_ID =        # The text channel ID for match results. 
SAVEPOINT_DB_CHANNEL_ID =    # The text channel ID for savepoints.
```

GAMES_DB_CHANNEL and SAVEPOINT_DB_CHANNEL must be empty text channels that no one else uses; because the bot uses it to read/write match results and user profile data.

(See https://discord.com/developers/docs/getting-started for info on where to find credentials, specifically the "Adding credentials" section)

## How to use

Run deploy-commands.js once to add the commands onto the server. You'll need to run it again everytime you make a change to any commands' parameters.

Run main.js or run.bat whenever you need to use the bot.

```sh-session
node deploy-commands.js
node main.js
```

### Commands

- /report Reports the results of a match.
- /profile Displays a player's profile.
- /leaderboard Displays the leaderboard.

## About the code

### Take a look at

- commands/ - Every command has its own file where it is handled here.
- core/ranked.js - Stored all the ranked-related functions and constants.

### Not that important

- deploy-commands.js - Updates slash commands onto the server.
- main.js - Loads project dependencies and logs onto discord. Calls events/ready.js when it's logged in.
- events/ready.js - This is ran after the bot logs into the discord server. It starts loading the database by reading the GAMES_DB_CHANNEL and SAVEPOINT_DB_CHANNEL.
- events/interactionCreate.js - A setup script that responds to slash commands, and calls the corresponding .js file.
