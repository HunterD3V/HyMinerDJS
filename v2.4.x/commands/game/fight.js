module.exports = [{
    name: 'fight',
    description: 'Fight mobs with your sword.',
    aliases: ['f'],
    display: 'true',
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory];$get[result]/;$get[item]|$sum[$get[amount];$splitText[2]]/]]
$textSplit[$get[result];|]

$loadOnlyIf[$get[result]!=;{"item":"$get[item]","amount":"$get[amount]"};addInventoryItem]

$let[result;$replaceText[$textSplitMap[findInvItem];
;]]
$setCacheData[Group;cache;findInvData_$authorId;$get[item]]
$textSplit[$getGlobaluserVar[inventory];/]

$sendMessage[<@$authorID> | You killed $customEmoji[$get[mobNS]] **$get[random] $get[mobWS]** with your $customEmoji[swords_$get[sword]] **$get[sword] sword** and gained $customEmoji[$get[item]] **$get[amount] $replaceText[$get[item]s;_; ]**.]

$let[amount;$splitText[4]]
$let[item;$splitText[3]]
$let[random;$splitText[2]]
$let[mobNS;$replaceText[$get[mobWS];s;;-1]]
$let[mobWS;$splitText[1]]

$textSplit[$get[mob-$get[sword]];|]

$c[+-+-+-+-+-+-+= MOB TABLE || LOOT TABLE =+-+-+-+-+-+-+]

$let[mob-dragon;endermite|$random[80;160]|ender_essence|$multi[$random[40;80];$random[2;3]]]
$let[mob-greatium;phantoms|$random[21;50]|phantom_membrane|$multi[$random[23;67];$random[2;3]]]
$let[mob-prism;guardians|$random[35;80]|sponge_block|$multi[$random[34;84];$random[1;3]]]
$let[mob-amethyst;vex|$random[17;34]|white_essence|$multi[$random[17;34];$random[1;4]]]
$let[mob-netherite;shulkers|$random[40;100]|shulker_shell|$multi[$random[35;85];$random[2;3]]]
$let[mob-diamond;endermans|$random[20;60]|ender_pearl|$multi[$random[15;30];$random[1;2]]]
$let[mob-golden;creepers|$random[15;40]|gunpowder|$multi[$random[15;35];$random[2;5]]]
$let[mob-iron;spiders|$random[10;30]|$randomText[string;spider_eye]|$multi[$random[10;25];$random[1;2]]]
$let[mob-stone;skeletons|$random[5;20]|$randomText[bone;arrow]|$multi[$random[5;15];3]]
$let[mob-wooden;zombies|$random[1;10]|rotten_flesh|$multi[$random[1;5];3]]

$c[+-+-+-+-+-+-+-+-+= END =+-+-+-+-+-+-+-+-+]

$let[sword;$splitText[1]]
$textSplit[$getGlobalUserVar[tools];,]

$cooldown[15s;<@$authorID> Cooldown » you're tired! Wait more ** %time% ** to mine again!]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]
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