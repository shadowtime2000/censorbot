const CommandBuilder = require("../classes/CommandBuilder");

const wordDB = require("../../../../wordDB");

module.exports = new CommandBuilder()
    .setName("banned")
    .setAliases(["isbanned", "banned?", "check", "checkword"])
    .setOwnersOnly(false)
    .setGuildOnly(true)
    .setRequireArgs(true)
    .setDeletable(false)
    .setCooldown(1)
    .setDisabled(false)
    // eslint-disable-next-line no-unused-vars
    .setExecute(async (message, user, args) => {
        if (!(message.guild || message.server)) return;
        if (await wordDB.has(`${(message.guild.id || message.server.id)}${args[0]}`)) {await message.channel.send("That word is a banned word"); await message.delete();}
        else {await message.channel.send("That word is not a banned word")}
    })