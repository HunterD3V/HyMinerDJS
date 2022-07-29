module.exports = {
    name: 'mine',
    aliases: ['m'],
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sum[$get[amount];$splitText[2]]/]]
$textSplit[$get[result];|]
$noMsgOnlyIf[$get[result]!=;{execute:addInventoryItem}]
$setCacheData[cache;addInventoryData_$authorId;$get[item]|$get[amount]]
$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[cache;findInvData_$authorId;$get[item]]
$textSplit[$getGlobaluserVar[inventory];/]
$sendMessage[You mined $customEmoji[$get[item]] **$get[amount] $get[item]** with your $customEmoji[pickaxes_$get[pick]] **$get[pick] pickaxe**.]
$let[item;stone]
$let[amount;$random[10;30]]
$let[pick;$splitText[2]]
$textSplit[$getGlobalUserVar[tools];,]
$noMsCooldown[90s;You are tired! Wait more **%time%** to mine again!]

$noMsgOnlyIf[$getGlobalUserVar[started]==true;{execute:notStartedError}]
$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]
`
}