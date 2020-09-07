const wordDB = require("../../../../wordDB");

module.exports = (message) => {
    let words = message.content.split(/[\b\n\s(?!$.)]/);
    words = words.filter(v => v !== "");

    for (const word in words) {
        if (wordDB.has(`${message.guild.id}${words[word]}`) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.delete({ reason: "Contains banned word" })
                .then(() => message.reply("Your message has been deleted for containing a banned word"))
                .catch(() => message.channel.send("I require message delete permissions to function"))
        }
    }
}