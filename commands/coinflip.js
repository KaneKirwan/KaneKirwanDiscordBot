module.exports = {
    name: "coinflip", aliases: ['cf'], permissions: [], description: "this is a coinflip command", execute(message, args, cmd, client, discord, profileData) {
        const coinValue = Math.floor(Math.random() * 2) + 1;
        if (coinValue == 1) {
            message.channel.send("You got Heads");
        } else if (coinValue == 2) {
            message.channel.send("You got Tails")
        };
    }
}
