const CommandBuilder = require("../classes/CommandBuilder");

const wordDB = require("../../../../wordDB");

module.exports = new CommandBuilder()
  .setName("listBannedWords")
  .setAliases(["listbannedwords", "listwords", "list"])
  .setOwnersOnly(false)
  .setGuildOnly(true)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(15)
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
    const words = await (await wordDB.all()).filter(
      (v) =>
        v.key.slice(0, message.guild.id.length || message.server.id.length) ===
        (message.guild.id || message.server.id)
    );
    for (const word in words) {
      await message.channel.send(
        `||${words[word].key.slice(
          message.guild.id.length || message.server.id.length,
          words[word].key.length
        )}||`
      );
    }
  });
