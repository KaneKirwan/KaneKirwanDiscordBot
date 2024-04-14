module.exports = {
    name: 'ban', aliases: [], permissions: ["ADMINISTRATOR"], description: "this is a ban command", execute(message, args, cmd, client, Discord) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }
        else { message.channel.send('You couldnt ban that member'); }
    }
}
