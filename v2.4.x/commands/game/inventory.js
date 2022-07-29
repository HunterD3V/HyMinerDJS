module.exports = {
    name: 'inventory',
    description: 'Shows your inventory.',
    usage: ' (user mention)',
    display: 'true',
    aliases: ['i', 'inv'],
    code: `
$if[$username[$authorID]==dinnerbone; 
$title[1;Inventory]
$thumbnail[1;$userAvatar[$get[user]]]
$description[1;$customEmoji[inventoryChest_icon] **$username[$get[user]]'s** inventory



$customEmoji[helmets_$splitText[1]] 
$customEmoji[chestplates_$splitText[2]] 
$customEmoji[leggings_$splitText[3]] 
$customEmoji[boots_$splitText[4]]
$textSplit[$getGlobalUserVar[armor;$get[user]];,]
$get[tools]

**Currency**

$customEmoji[money;918717548407709747] Money:  **#CHAR#$abbreviate[$getGlobalUserVar[money;$get[user]];2]**
$customEmoji[bedrockNugget;918717548407709747] Bedrock nuggets: **$abbreviate[$getGlobalUserVar[bedrockNuggets;$get[user]];1]**


**Items**

$if[$replaceText[$get[result];\n;]==;**Nothing!**;$replaceText[$replaceText[$get[result];\n;];<enter>;\n]]

If there are something wrong with your inventory (like items not stacking), use \`$getServerVar[prefix]fixInv\`.
]
$let[result;$textSplitMap[inventoryMap]]
$textSplit[$replaceText[$getGlobalUserVar[inventory;$get[user]];/;;-1];/]
$color[1;#5ca3e6]; 
$title[1;If there are something wrong with your inventory (like items not stacking), use \`$getServerVar[prefix]fixInv\`.]
$thumbnail[1;$userAvatar[$get[user]]]
$description[1;**Items**

$if[$replaceText[$get[result];\n;]==;**Nothing!**;$replaceText[$replaceText[$get[result];\n;];<enter>;\n]]

$customEmoji[inventoryChest_icon] **$username[$get[user]]'s** inventory



$customEmoji[helmets_$splitText[1]] 
$customEmoji[chestplates_$splitText[2]] 
$customEmoji[leggings_$splitText[3]] 
$customEmoji[boots_$splitText[4]]
$textSplit[$getGlobalUserVar[armor;$get[user]];,]
$get[tools]

**Currency**

$customEmoji[money;918717548407709747] Money:  **#CHAR#$abbreviate[$getGlobalUserVar[money;$get[user]];2]**
$customEmoji[bedrockNugget;918717548407709747] Bedrock nuggets: **$abbreviate[$getGlobalUserVar[bedrockNuggets;$get[user]];1]**]
$footer[1;Inventory]
$let[result;$textSplitMap[inventoryMap]]
$textSplit[$replaceText[$getGlobalUserVar[inventory;$get[user]];/;;-1];/]
$color[1;#5ca3e6]]

$onlyIf[$getGlobalUserVar[started;$get[user]]==true;{newEmbed:
{title:Error}
{description:<@!$get[user]> haven't started yet.}
{color:$getVar[red]}
}]
$onlyIf[$isBot[$get[user]]==false;{newEmbed:
{title:Error}
{description:<@!$get[user]> is a Bot!}
{color:$getVar[red]}
}]

$let[tools;$customEmoji[swords_$splitText[1]] $customEmoji[pickaxes_$splitText[2]] $customEmoji[axes_$splitText[3]] $customEmoji[shovels_$splitText[4]] $customEmoji[hoes_$splitText[5]]] $textSplit[$getGlobalUserVar[tools;$get[user]];,]
$let[user;$mentioned[1]]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}