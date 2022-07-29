module.exports = {
    name: "reboot",
    aliases: ['rbt','reload','rld'],
    code: `
    rebooted bot.
$reboot[index.js]
$onlyIf[$getGlobalUserVar[isDev]==true;You can't use that command; You aren't a developer!]
    `
}