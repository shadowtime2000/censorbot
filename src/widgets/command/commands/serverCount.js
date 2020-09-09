const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
    .setName("serverCount")
    .setAliases(["servers", "stats"])
    .setOwnersOnly(false)
    .setGuildOnly(false)
    .setRequireArgs(false)
    .setDeletable(false)
    .setCooldown(8)
    .setDisabled(false)
    // eslint-disable-next-line no-unused-vars
    .setExecute(async (message, user, args) => {
        await message.reply(`Server count - ${message.client.guilds.cache.size}`)
    })