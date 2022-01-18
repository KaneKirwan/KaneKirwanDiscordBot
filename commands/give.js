const profileModel = require("../models/profileSchema");
module.exports = {
    name: "give", aliases: [], permissions: [], description: "this is a give command", async execute(message, args, cmd, client, discord, profileData) {
        if (message.member.id != "792605627930509342") return message.channel.send(`Sorry only **Kane Kirwan** can run this command`);
        if (!args.length) return message.channel.send("You need to mention a player to give them money");
        const amount = args[1];
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("That user does not exist");
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
        try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if (!targetData) return message.channel.send(`This user doens't exist in the database`);
            await profileModel.findOneAndUpdate({
                userID: target.id,
            }, {
                $inc: {
                    coins: amount,
                },
            });
            return message.channel.send(`This player has been given £${amount}`);
        }
        catch (err) { console.log(err); }
    },
};
