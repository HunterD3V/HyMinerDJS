module.exports = {
    name: "fight",
    aliases: ['f'],
    code: `
    $onlyIf[$getGlobalUserVar[Started]==Started;You haven't started yet]
    $onlyIf[$getServerVar[botServerVer]==1.4b;
$if[$getGlobalUserVar[sword]==Locked;
You didn't unlocked your sword yet!;
you killed a <:DisMCE_zombie:900739255658225694> zombie and got $random[1;15] <:DisMCE_rottenFlesh:900740164798791700> Rotten Flesh]]
$setGlobalUserVar[flesh;$sum[$getGlobalUserVar[flesh];$random[1;15]];$authorID]]
$cooldown[30s; woah, too fast buddy]
$setGlobalUserVar[Fights;$sum[$getGlobalUserVar[Fights];1];$authorID]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}