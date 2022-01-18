const profileModel = require("../models/profileSchema");
module.exports = {
    name: "deposit", aliases: ["dep"], permissions: [], description: "this is a deposit command", async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
        try {
            if (amount > profileData.coins) return message.channel.send(`You don't have that amount of money to deposit`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                },
            });
            return message.channel.send(`You deposited £${amount} into your bank`);
        }
        catch (err) { console.log(err); }
    },
};
