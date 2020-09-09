module.exports = (guild) => {
    if (guild.available) {
        const stamp = new Date(guild.joinedTimestamp).toISOString();
        console.log(stamp)
        const logMessage = [
            `${stamp.substring(0, 10)} ${stamp.substring(11, 19)}`,
            guild.name,
            `${guild.memberCount} Members`,

        ]
        console.log(logMessage.join(" | "))
    }
}