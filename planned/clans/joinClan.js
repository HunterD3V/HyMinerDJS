/*
Clan command (not finished)

module.exports = {
    name: 'clan-join',
    code: `
$onlyIf[$replaceText[$textSplitMap[clanNameCheck];\n;]==true;{execute:#ad2f2f}]

$setCacheData[cache;clanMessage_$authorID;$sendMessage[{newEmbed:{title:Verifying clan...}{description:Please, be patient, we are verifying the clan...}};yes]]
$setCacheData[cache;clanName_$authorID;$message]
$textSplit[$getVar[clans];/]

$onlyIf[$message!=;{newEmbed:{title:Usage}{description:\`$getServerVar[prefix]clan-join <clan name>\`}}]

$noMsgOnlyIf[$getVar[maintenance]==false;{execute:maintenanceError}] 
`
}
*/