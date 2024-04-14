module.exports = {
    name: 'reactionrole', aliases: [], permissions: ["ADMINISTRATOR"], description: "this is a reactionrole command", async execute(message, args, cmd, client, Discord) {
        const channel = '850050249996369942';
        const announcements = message.guild.roles.cache.find(role => role.name === "Announcement Pings");
        const videos = message.guild.roles.cache.find(role => role.name === "Video Pings");
        const announcement = '📣';
        const video = '📹';
        let embed = new Discord.MessageEmbed()
            .setColor('#006aff')
            .setTitle('React to get pinged')
            .setDescription('React if you want to get notified about\n\n'
                + `${'📣'} for announcements\n`
                + `${'📹'} for videos`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(announcement);
        messageEmbed.react(video);
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === announcement) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(announcements);
                }
                if (reaction.emoji.name === video) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(videos);
                }
            }
            else { return; }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === announcement) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(announcements);
                }
                if (reaction.emoji.name === video) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(videos);
                }
            }
            else { return; }
        });
    }
}
