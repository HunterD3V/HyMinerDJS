module.exports = [{
    name: 'buy',
    description: 'Purchase an available item in the shop.',
    display: 'true',
    usage: ' <item> <(type)>',
    code: `
$sendMessage[{newEmbed:
{title:Invalid item}
{description:We couldn't find this item: \`$message\`}
{color:$getVar[red]}
{footer:Use mc!shop to list available items.}
}]

$loadOnlyIf[$hyMiner[hyminer.armors.$get[item].$get[type]]==undefined;{"itemRaw":"$message","item":"$get[item]","type":"$get[type]"};buyArmor]

$loadOnlyIf[$hyMiner[hyminer.tools.$get[type]s.$get[item]]==undefined;{"itemRaw":"$message","item":"$get[type]s","type":"$get[item]"};buyTool]

$let[type;$toLowerCase[$message[2]]]
$let[item;$toLowerCase[$message[1]]]

$loadOnlyIf[$hyMiner[hyminer.items.$get[item]]==undefined||$get[item]==all;{"itemRaw":"$get[rer]","item":"$get[item]","amount":"$get[rew]","value":"$hyMiner[hyminer.items.$get[item]]"};buyItem]

$let[item;$toLowerCase[$replaceText[$get[rer]; ;_]]]
$let[rer;$if[$isNumber[$get[res]]==true;$messageSlice[1];$message]]
$let[rew;$if[$isNumber[$get[res]]==true;$get[res];1]]
$let[res;$message[1]]


$loadOnlyIf[$message!=;{"command":"$commandName"};getCommandInfo]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$onlyIf[$getGlobalUserVar[compCap]==false;]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}, {
    type: 'awaited',
    name: 'buyItem',
    code: `
$sendMessage[{newEmbed:
{title:Buy}
{description:You have bought $customEmoji[$awaitData[item]] **$replacetext[$awaitData[item];_; ]** for **$customEmoji[money] $$get[value]**}
{color:$getVar[green]}
}]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$get[value]]]
$let[value;$multi[$awaitData[value];$awaitData[amount]]]


$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$awaitData[item]|$sum[$awaitData[amount];$splitText[2]]/]]
$textSplit[$get[result];|]

$loadOnlyIf[$get[result]!=;{"item":"$awaitData[item]","amount":"$awaitData[amount]"};addInventoryItem]

$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[Group;cache;findInvData_$authorId;$awaitData[item]]
$textSplit[$getGlobaluserVar[inventory];/]


$onlyIf[$getGlobalUserVar[money]>=$awaitData[value];{newEmbed:
{title:Error}
{description:You don't have enough money to buy this item: \`$replaceText[$awaitData[item];_; ]\`

Item price: $customEmoji[money] **$awaitData[value]**
Your money: $customEmoji[money] **$getGlobalUserVar[money]**
}
}]
`
}, {
    type: 'awaited',
    name: 'buyTool',
    code: `
$sendMessage[{newEmbed:
{title:Buy}
{description:You just bought $customEmoji[$get[type]s_$get[item]] **$toLowerCase[$message]** for $customEmoji[money] $**$abbreviate[$hyMiner[hyminer.tools.$get[type]s.$get[item]]]**.}
{color:$getVar[green]}}]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$hyMiner[hyminer.tools.$get[type]s.$get[item]]]]


$setGlobalUserVar[tools;$get[positions]]

$let[positions;$if[$get[index]==1;$get[item],$splitText[2],$splitText[3],$splitText[4],$splitText[5];$if[$get[index]==2;$splitText[1],$get[item],$splitText[3],$splitText[4],$splitText[5];$if[$get[index]==3;$splitText[1],$splitText[2],$get[item],$splitText[4],$splitText[5];$if[$get[index]==4;$splitText[1],$splitText[2],$splitText[3],$get[item],$splitText[5];$if[$get[index]==5;$splitText[1],$splitText[2],$splitText[3],$splitText[4],$get[item]]]]]]]

$onlyIf[$splitText[$get[index]]!=$get[item];{newEmbed:
{title:Error}
{description:You already have this tool: \`$message\`}
{color:$getVar[red]}
}]

$textSplit[$getGlobalUserVar[tools];,]

$onlyIf[$getGlobalUserVar[money]>=$hyMiner[hyminer.tools.$get[type]s.$get[item]];{newEmbed:
{title:Error}
{description:You don't have enough money to buy this tool: \`$message\`

Your balance: $customEmoji[money] **$getGlobalUserVar[money]**
Tool value: $customEmoji[money] **$hyMiner[hyminer.tools.$get[type]s.$get[item]]**
}
{color:$getVar[red]}
}]

$let[index;$findTextSplitIndex[$get[type]]]
$textSplit[sword,pickaxe,axe,shovel,hoe;,]
`
}, {
    type: 'awaited',
    name: 'buyArmor',
    code: `
$sendMessage[{newEmbed:
{title:Buy}
{description:You just bought $customEmoji[$get[pl]_$get[item]] **$toLowerCase[$message]** for $customEmoji[money] **$hyMiner[hyminer.armors.$get[item].$get[type]]**.}
{color:$getVar[green]}
}]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$hyMiner[hyminer.armors.$get[item].$get[type]]]]
$setGlobalUserVar[armor;$get[positions]]

$let[positions;$if[$get[index]==1;$get[item],$splitText[2],$splitText[3],$splitText[4];$if[$get[index]==2;$splitText[1],$get[item],$splitText[3],$splitText[4];$if[$get[index]==3;$splitText[1],$splitText[2],$get[item],$splitText[4];$if[$get[index]==4;$splitText[1],$splitText[2],$splitText[3],$get[item]]]]]]

$onlyIf[$splitText[$get[index]]!=$get[item];{newEmbed:
{title:Error}
{description:You already have this armor: \`$message\`}
{color:$getVar[red]}
}]

$onlyIf[$getGlobalUserVar[money]>=$hyMiner[hyminer.armors.$get[item].$get[type]];{newEmbed:
{title:Error}
{description:You don't have enough money to buy this armor: \`$message\`

Your balance: $customEmoji[money] **$getGlobalUserVar[money]**
Armor value: $customEmoji[money] **$hyMiner[hyminer.armors.$get[item].$get[type]]**
}
{color:$getVar[red]}
}]
$let[pl;$if[$stringEndsWith[$get[type];s]==false;$get[type]s;$get[type]]]

$textSplit[$getGlobalUserVar[armor];,]
$let[index;$findTextSplitIndex[$get[type]]]
$textSplit[helmet,chestplate,leggings,boots;,]
`
}]