module.exports = {
    name: 'command', aliases: [], permissions: [], description: "this is a command command", execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#006aff')
            .setTitle('Hello')
            .setURL('https://en.wikipedia.org/wiki/Hello')
            .setDescription('Hello')
            .addFields({ name: 'Hello', value: '1' })
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/220px--127wiki.jpg')
            .setFooter('Hello');
        message.channel.send(newEmbed);
    }
}
