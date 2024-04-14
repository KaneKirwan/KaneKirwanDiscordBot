module.exports = {
    name: 'unmute', aliases: [], permissions: ["ADMINISTRATOR"], description: "this is a unmute command", execute(message, args, cmd, client, Discord) {
        const member = message.mentions.users.first();
        if (member) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }
        else { message.channel.send('Cant find that member'); }
    }
}
