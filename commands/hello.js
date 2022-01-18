module.exports = { name: 'hello', aliases: [], permissions: [], description: "this is a hello command", execute(message, args, cmd, client, Discord) { message.channel.send('hello'); } }
