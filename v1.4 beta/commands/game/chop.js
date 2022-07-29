module.exports = {
    name: "chop",
    aliases: ['c'],
    code: `
    $onlyIf[$getServerVar[botServerVer]==1.4b;
you chopped $random[2;8] with your $getGlobalUserVar[axe] axe
$setGlobalUserVar[oakWood;$sum[$getGlobalUserVar[oakWood];$random[2;8]];$authorID]]
$setGlobalUserVar[chops;$sum[$getGlobalUserVar[chops];1]$authorID]
$onlyIf[$getGlobalUserVar[axe]!=:lock: Locked;You haven't unlocked your axe yet!]
$onlyIf[$getGlobalUserVar[started]==true;You havent started yet.]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]   `
}