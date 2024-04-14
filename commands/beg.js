const profileModel = require("../models/profileSchema");
module.exports = {
    name: "beg", aliases: [], permissions: [], cooldown: 300, description: "this is a beg command", async execute(message, args, cmd, client, discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, {
            $inc: {
                coins: randomNumber,
            },
        });
        return message.channel.send(`${message.author.username}, you begged and received £${randomNumber}`);
    },
};
