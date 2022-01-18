module.exports = {
    name: "diceroll", aliases: ['dr'], permissions: [], description: "this is a diceroll command", execute(message, args, cmd, client, discord, profileData) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        if (diceValue) {
            message.channel.send(`The value on your dice is ${diceValue}`)
        };
    }
}
