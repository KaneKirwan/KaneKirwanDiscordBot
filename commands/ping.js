const Discord = require("discord.js")
module.exports = {
    name: 'ping', aliases: [], permissions: [], description: "this is a ping command", execute(message, args, cmd, client, Discord) {
        const pingEmbed = new Discord.MessageEmbed()
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
            .setDescription(`Latency is ${(message.createdTimestamp - Date.now()) * -1}ms \nAPI Latency is ${Math.round(client.ws.ping)}ms\nUptime: ${process.uptime().toFixed(2)}`)
            .setFooter("pong", client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('#006aff')
        message.channel.send(pingEmbed)
    }
}
