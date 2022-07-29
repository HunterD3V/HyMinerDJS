module.exports = {
    name: "leveltest",
    code: `
  $se[$message[1]==mine||$message[1]==m||]
$se[$get[random]>1000&&$get[random]<5000;
$se[$getGlobalUserVar[level]<1;
<@!$authorID> you just leveled up to level 1!
]]
$setGlobalUserVar[xp;$get[random]]

$let[random;$sum[$getGlobalUserVar[xp];$random[3;20]]]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}