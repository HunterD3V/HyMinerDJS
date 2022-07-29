module.exports = {
    name: "blacklist",
    code: `
    $title[1;blacklist]
    $description[1; <@$authorID> banned <@$message>]
    $footer[1;Bot Banning]
    $blacklistIDs[$message[1];You're banned from the bot. if you feel you did something wrong and want to appeal, join the support server via help command. ]
    $onlyIf[$getGlobalUserVar[isDev]==true;You're not a developer!]
    $onlyIf[$findMember[$message[1]]!=;erro! failed to ban user with id n\`$message[1]\`] 
    $onlyIf[$getVar[maintenance]==false&&$guildID==825439710024433674&&$getServerVar[botServerVer]!=v1.4b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}