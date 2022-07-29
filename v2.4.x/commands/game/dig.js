module.exports = [{
    name: 'dig',
    description: 'Digs with your shovel.',
    aliases: ['d'],
    display: 'true',
    code: `
$let[res;$textSplitMap[setItemsMap]]

$sendMessage[<@$authorID> | You dug $get[resText] with your $customEmoji[shovels_$get[shovel]] **$get[shovel] shovel**.]

$let[resText;$replaceText[$textSplitMap[lootMap];\n;, ]]
$textSplit[$get[loot-$get[shovel]];/]

$c[+-+-+-+-+-+-+= LOOT TABLE =+-+-+-+-+-+-+]

$let[loot-ruby;aether_dirt|$random[10;205]/aether_grass|$random[5;125]]
$let[loot-prism;dirt_block|$random[208;694]/grass_block|$random[50;150]/coarse_dirt|$random[20;102]/sand|$random[8;44]/soul_sand|$random[8;42]]
$let[loot-netherite;dirt_block|$random[104;347]/grass_block|$random[25;75]/coarse_dirt|$random[10;51]/sand|$random[4;21]/soul_sand|$random[4;22]]
$let[loot-amethyst;dirt_block|$random[66;268]/grass_block|$random[15;50]/coarse_dirt|$random[5;26]/sand|$random[2;11]/soul_sand|$random[2;11]]
$let[loot-diamond;dirt_block|$random[89;233]/grass_block|$random[20;55]/coarse_dirt|$random[8;35]/sand|$random[3;14]/soul_sand|$random[2;11]]
$let[loot-golden;dirt_block;|$random[66;174]/grass_block|$random[15;35]/coarse_dirt|$random[6;27]/sand|$random[3;14]]
$let[loot-iron;dirt_block;|$random[51;145]/grass_block|$random[10;28]/coarse_dirt|$random[4;23]]
$let[loot-stone;dirt_block|;$random[39;107]/grass_block;|$random[5;17]]
$let[loot-wooden;dirt_block|$random[27;74]]

$c[+-+-+-+-+-+-+-+-+= END =+-+-+-+-+-+-+-+-+]

$let[shovel;$splitText[4]]
$textSplit[$getGlobalUserVar[tools];,]

$cooldown[15s;<@$authorID> Cooldown » you're tired! Wait more **%time%** to dig again!]

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