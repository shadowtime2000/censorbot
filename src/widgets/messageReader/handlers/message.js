const wordDB = require("../../../../wordDB");

module.exports = (message) => {
  if (!message.guild) {
    return;
  }
  let words = message.content.split(/[\b\n\s(?!$.)]/);
  words = words.filter((v) => v !== "");

  if (message.member.hasPermission("ADMINISTRATOR")) {
    return;
  }
  if (message.author.id === message.client.user.id) {
    return;
  }

  for (const word in words) {
    if (
      wordDB.has(`${message.guild.id}${words[word]}`) &&
      !message.member.hasPermission("ADMINISTRATOR")
    ) {
      message
        .delete({ reason: "Contains banned word" })
        .then(() =>
          message.reply(
            "Your message has been deleted for containing a banned word"
          )
        )
        .catch((error) => {
          console.error(error);
          message.channel.send(
            error === undefined ? "Something went wrong" : error.toString()
          );
        });
    }
  }
};
