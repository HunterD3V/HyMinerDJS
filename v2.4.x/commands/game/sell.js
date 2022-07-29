 module.exports = [{
    name: 'sell',
    description: 'Sells items from your inventory.\nYou can use \`all\` to sell all the amount you have of an item, \nand \`everything\` to sell all items in your inventory.',
    usage: ' <amount> <item>',
    display: 'true',
    code: `
$setglobalUserVar[money;$sum[$multi[$get[itemValue];$get[amount]];$getGlobalUserVar[money]]]
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sub[$splitText[2];$get[amount]]/]]
$title[1;Sell]
$description[1;You have sold $customEmoji[$get[item]] **$get[amount] $replaceText[$get[itemName];_; ]s** for $customEmoji[money]$**$abbreviate[$multi[$get[itemValue];$get[amount]];2]**]
$color[1;$getVar[green]]

$loadOnlyIf[$message[1]!=everything;{};sellevy]


$onlyIf[$checkCondition[$get[result]!=&&$get[result]!=0]!=false||$message[1]==everything;{newEmbed:{title:Error}{description:You don't have the item \`$get[itemName]\` in your inventory.}{color:$getVar[red]}}]

$onlyIf[$checkCondition[$isNumber[$get[amount]]==true&&$hyMiner[if ($get[amount]>0){"true"} else {"false"}]==true&&$hyMiner[if ($get[amount]<=$splitText[2]){"true"} else {"false"}]==true]==true||$message[1]==everything;{newEmbed:{title:Error}{description:Invalid amount provided.}{color:$getVar[red]}}]

$let[amount;$if[$message[1]==all;$splitText[2];$message[1]]]
$textSplit[$get[result];|]
$let[resultValue;$advancedTextSplit[$get[result];|;2]]
$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[Group;cache;findInvData_$authorId;$get[item]]
$textSplit[$replaceText[$getGlobalUserVar[inventory];/;;-1];/]

$onlyIf[$get[itemValue]!=undefined||$message[1]==everything;{newEmbed:{title:Invalid item}{description:We didn't found the item \`$get[itemName]\`}{color:#ad2f2f}}]


$loadOnlyIf[$checkCondition[$message[1]!=&&$get[itemName]!=]==true||$message[1]==everything;{"command":"$commandName"};getCommandInfo]

$let[itemValue;$hyMiner[hyminer.items.$get[item]]]
$let[item;$replaceText[$toLowerCase[$get[itemName]]; ;_]]
$let[itemName;$messageSlice[1]]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$onlyIf[$getGlobalUserVar[compCap]==false;]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
$suppressErrors
`
}, {
    type: 'awaited',
    name: 'sellevy',
    code: `
$setglobalUserVar[money;$sum[$get[amount];$getGlobalUserVar[money]]]
$setGlobalUserVar[inventory;]
$sendMessage[{newEmbed:
{title:Sell}
{description:You have sold **everything** for $customEmoji[money] $**$abbreviate[$get[amount];2]**.}
{color:$getVar[green]}
}]

$onlyIf[$getGlobalUserVar[inventory]!=&&$get[amount]!=0;{newEmbed:
{title:Error}
{description:Your inventory is empty!}
{color:$getVar[red]}
}]

$let[amount;$math[$replaceText[$textSplitMap[getEverythingValue];\n;+]]]
$textSplit[$replaceText[$getGlobalUserVar[inventory];/;;-1];/]
$suppressErrors
`
}]