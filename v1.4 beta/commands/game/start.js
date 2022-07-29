module.exports = {
    name: "start",
    code: `
$title[2;The beggining of a new miner]
$description[2; <@$authorID> , you just started and received your:
<:DisMCE_wooden_pickaxe:900526370155806731> Wooden Pickaxe, and now you can start mining!
to unlock other tools, level up.]
$footer[2;DisCraft MCE | $getVar[botVer]]
$color[2;#32CD32]
$author[2;$username[$authorID];$authorAvatar]
$setGlobalUserVar[pickaxe;wooden pickaxe]
$setGlobalUserVar[started;true]
$setGlobalUserVar[pickaxeIcon;<:DisMCE_wooden_pickaxe:900526370155806731> ]
$onlyIf[$getGlobalUserVar[started]!=true;You already started!]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}