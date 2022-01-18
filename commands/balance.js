module.exports = {
    name: "balance", aliases: ['bal'], permissions: [], description: "this is a balance command", execute(message, args, cmd, client, discord, profileData) {
        message.channel.send(`Balance: **£${profileData.coins}**\nBank: **£${profileData.bank}**`);
    },
};
