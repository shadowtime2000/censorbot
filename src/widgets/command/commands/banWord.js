const CommandBuilder = require("../classes/CommandBuilder");

const wordDB = require("../../../../wordDB");

module.exports = new CommandBuilder()
  .setName("banword")
  .setAliases(["wordban", "ban"])
  .setOwnersOnly(false)
  .setGuildOnly(true)
  .setRequireArgs(true)
  .setDeletable(false)
  .setCooldown(5)
  .setDisabled(false)
  // eslint-disable-next-line no-unused-vars
  .setExecute(async (message, user, args) => {
    if (!(message.guild || message.server)) {
      return;
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return await message.channel.send(
        "You do not have the required permissions to use that command"
      );
    }
    await wordDB.set(
      `${message.guild.id || message.server.id}${args[0]}`,
      "banned"
    );
    await message.channel.send("That word has now been banned");
  });
