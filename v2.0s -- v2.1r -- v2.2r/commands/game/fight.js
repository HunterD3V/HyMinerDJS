module.exports = {
    name: 'fight',
    aliases: ['f'],
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sum[$get[amount];$splitText[2]]/]]
$textSplit[$get[result];|]
$noMsgOnlyIf[$get[result]!=;{execute:addInventoryItem}]
$setCacheData[cache;addInventoryData_$authorId;$get[item]|$get[amount]]
$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[cache;findInvData_$authorId;$get[item]]
$textSplit[$getGlobaluserVar[inventory];/]
$sendMessage[You killed  $customEmoji[$get[mobNS]]  **$get[random] $get[mobWS]** and gained $customEmoji[$get[item]] **$get[amount] $replaceText[$get[item]s;_; ]**.]

$let[item;$if[$get[mobNS]==zombie;rotten_flesh;$if[$get[mobNS]==creeper;gunpowder;$if[$get[mobNS]==skeleton;$randomText[bone;arrow];$if[$get[mobNS]==spider;string]]]]]
$let[amount;$round[$divide[$get[random];$random[2;3]]]]
$let[random;$random[4;12]]
$let[mobNS;$replaceText[$get[mobWS];s;;-1]]
$let[mobWS;$randomText[zombies;creepers;skeletons;spiders]]
$noMsCooldown[1m;You are tired! Wait more **%time%** to fight again!]

$noMsgOnlyIf[$getGlobalUserVar[started]==true;{execute:notStartedError}]
$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]
`
}