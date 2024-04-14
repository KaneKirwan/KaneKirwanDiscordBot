module.exports = {
    name: 'kick', aliases: [], permissions: ["ADMINISTRATOR"], description: "this is a kick command", execute(message, args, cmd, client, Discord) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }
        else { message.channel.send('You couldnt kick that member'); }
    }
}
