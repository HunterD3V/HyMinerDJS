module.exports = [{
    name: 'chop',
    description: 'Chops some trees.',
    aliases: ['c'],
    display: 'true',
    code: `
$let[res;$textSplitMap[setItemsMap]]

$sendMessage[<@$authorID> | you chopped $get[resText] with your $customEmoji[axes_$get[axe]] **$get[axe] axe**.]

$let[resText;$replaceText[$textSplitMap[lootMap];\n;, ]]
$textSplit[$get[loot-$get[axe]];/]

$c[+-+-+-+-+-+-+= LOOT TABLE =+-+-+-+-+-+-+]

$let[loot-prism;therawood|$random[25;105]/amberoot|$random[13;78]]
$let[loot-amethyst;mangrove_wood|$random[98;596]]
$let[loot-netherite;crimson_stem|$random[49;298]/warped_stem|$random[48;299]]
$let[loot-diamond;oak_wood|$random[150;400]/spruce_wood|$random[125;300]/birch_wood|$random[85;175]/acacia_wood|$random[53;140]]
$let[loot-golden;oak_wood|$random[90;210]/birch_wood|$random[23;87]/acacia_wood|$random[24;109]]
$let[loot-iron;oak_wood|$random[45;163]/birch_wood|$random[12;71]]
$let[loot-stone;oak_wood|$random[23;79]/birch_wood|$random[6;33]]
$let[loot-wooden;oak_wood|$random[5;23]]

$c[+-+-+-+-+-+-+-+-+= END =+-+-+-+-+-+-+-+-+]

$let[axe;$splitText[3]]
$textSplit[$getGlobalUserVar[tools];,]
$cooldown[10s;<@$authorID> Cooldown »  you're tired! Wait more **%time%** to chop again!]



$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$onlyIf[$getGlobalUserVar[compCap]==false;]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}, {
    name: 'lootMap',
    type: 'awaited',
    code: `
$if[$splitText[2]>0;$customEmoji[$splitText[1]] **$splitText[2] $replaceText[$splitText[1];_; ]**;]

$textSplit[$message[1];|]
`
}, {
    name: 'setItemsMap',
    type: 'awaited',
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sum[$get[amount];$splitText[2]]/]]
$textSplit[$get[result];|]

$loadOnlyIf[$get[result]!=;{"item":"$get[item]","amount":"$get[amount]"};addInventoryItem]

$let[result;$replaceText[$textSplitMap[findInvItem];\n;]]
$setCacheData[Group;cache;findInvData_$authorId;$get[item]]
$textSplit[$getGlobalUserVar[inventory];/]

$let[amount;$splitText[2]]
$let[item;$splitText[1]]
$textSplit[$message[1];|]
`
}]