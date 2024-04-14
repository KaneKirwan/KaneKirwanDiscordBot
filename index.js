const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
],
partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel,
    Discord.Partials.Reaction
]
});
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler => { require(`./handlers/${handler}`)(client, Discord); })
mongoose.connect(process.env.MONGODB_SRV)
    .then(() => { console.log("Connected to the database"); })
client.login(process.env.DISCORD_TOKEN);
