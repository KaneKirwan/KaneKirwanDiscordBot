const profileModel = require("../models/profileSchema");
module.exports = {
    name: "withdraw", aliases: ["wd"], permissions: [], description: "this is a withdraw command", async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number");
        try {
            if (amount > profileData.bank) return message.channel.send(`You don't have that amount of money to withdraw`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                },
            });
            return message.channel.send(`You withdrew £${amount} into your balance`);
        }
        catch (err) { console.log(err); }
    },
};
