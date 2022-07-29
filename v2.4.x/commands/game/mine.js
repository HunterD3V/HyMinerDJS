module.exports = [{
    name: 'mine',
    description: 'Mines with your pickaxe.',
    aliases: ['m'],
    display: 'true',
    code: `
$let[res;$textSplitMap[setItemsMap]]

$sendMessage[$randomText[<@$authorID> | you mined $get[resText] with your $customEmoji[pickaxes_$get[pick]] **$get[pick] pickaxe**.;<@$authorID> | you mined $get[resText] with your $customEmoji[pickaxes_$get[pick]] **$get[pick] pickaxe**. \n**Warning** This hyminer version is discontinued! please refer to the Support Server for more info about V3]

$let[resText;$replaceText[$textSplitMap[lootMap];\n;, ]]
$textSplit[$get[loot-$get[pick]];/]

$c[+-+-+-+-+-+-+= LOOT TABLE =+-+-+-+-+-+-+]

$let[loot-amethyst;glowstone|$random[150;500]/amethyst|$random[75;250]/sapphire|$random[25;125]]
$let[loot-prism;divine_carved_stone|$random[7;86]/aether_icestone|$random[4;52]/arkenium_ore|$random[3;23]/aetherium_ingot|$random[1;12]]
$let[loot-netherite;netherrack|$random[123;406]/magma_block|$random[42;138]/ancient_debris|$random[10;35]/cobblestone|$random[83;286]/coal|$random[38;156]/raw_copper|$random[32;106]/raw_iron|$random[48;104]/raw_gold|$random[24;76]/diamond|$random[8;32]/prism|$random[2;10]/obsidian|$random[14;80]/ruby|$random[9;34]]
$let[loot-diamond;cobblestone|$random[37;82]/coal|$random[13;27]/raw_copper|$random[7;18]/raw_iron|$random[10;24]/raw_gold|$random[4;19]/diamond|$random[1;5]/prism|$random[1;2]]
$let[loot-golden;cobblestone|$random[22;48]/coal|$random[10;17]/raw_copper|$random[1;6]/raw_iron|$random[4;13]/raw_gold|$random[1;5]]
$let[loot-iron;cobblestone|$random[15;35]/coal|$random[5;12]/raw_iron|$random[1;7]]
$let[loot-stone;cobblestone|$random[15;25]/coal|$random[1;5]]
$let[loot-wooden;cobblestone|$random[10;20]]

$c[+-+-+-+-+-+-+-+-+= END =+-+-+-+-+-+-+-+-+]

$let[pick;$splitText[2]]
$textSplit[$getGlobalUserVar[tools];,]

$cooldown[5s;<@$authorID> Cooldown » you're tired! Wait more ** %time% ** to mine again!]

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