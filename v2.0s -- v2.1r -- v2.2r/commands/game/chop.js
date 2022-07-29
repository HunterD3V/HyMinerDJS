module.exports = {
    name: 'chop',
    aliases: ['c'],
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sum[$get[amount];$splitText[2]]/]]
$textSplit[$get[result];|]
$noMsgOnlyIf[$get[result]!=;{execute:addInventoryItem}]
$setCacheData[cache;addInventoryData_$authorId;$get[item]|$get[amount]]
$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[cache;findInvData_$authorId;$get[item]]
$textSplit[$getGlobaluserVar[inventory];/]
$sendMessage[You chopped $customEmoji[$get[item]] **$get[amount] $replaceText[$get[item]s;_; ]** with your $customEmoji[axes_$get[axe]] **$get[axe] axe**.]
$let[item;oak_wood]
$let[amount;$random[6;16]]

$let[axe;$splitText[3]]
$textSplit[$getGlobalUserVar[tools];,]

$noMsCooldown[30s;You are tired! Wait more **%time%** to chop again!]

$noMsgOnlyIf[$getGlobalUserVar[started]==true;{execute:notStartedError}]
$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]
`
}