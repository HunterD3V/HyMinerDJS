module.exports = {
    name: 'inventory',
    aliases: ['i', 'inv'],
    code: `
$title[1;Inventory]
$thumbnail[1;$authorAvatar]
$description[1;**$username[$authorId]'s** inventory

$customEmoji[helmets_$splitText[1]] $splitText[1] helmet
$customEmoji[chestplates_$splitText[2]] $splitText[2] chestplate
$customEmoji[leggings_$splitText[3]] $splitText[3] leggings
$customEmoji[boots_$splitText[4]] $splitText[4] boots
$textSplit[$getGlobalUserVar[armor];,]
$customEmoji[money;918717548407709747] Money: **#CHAR#$getGlobalUserVar[money]**
$customEmoji[bedrockNugget;918717548407709747] Bedrock Nuggets: **$getGlobalUserVar[bedrockNuggets]**

**Items**

$if[$replaceText[$get[result];\n;]==;**Nothing!**;$replaceText[$replaceText[$get[result];\n;];<enter>;\n]]

]
$let[result;$textSplitMap[inventoryMap]]
$textSplit[$replaceText[$getGlobalUserVar[inventory];/;;-1];/]
$color[1;#5ca3e6]

$noMsgOnlyIf[$getGlobalUserVar[started]==true;{execute:notStartedError}]
$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]   
`
}