module.exports = [{
    name: "inventory",
    aliases: ['inv','i'],
    code: `
    $onlyIf[$getServerVar[botServerVer]==1.4b;
$title[1;**$username**'s Inventory]
$description[1;
**Name**: <@$authorID>
**Armor**: $getGlobalUserVar[helmet], $getGlobalUserVar[chestplate], $getGlobalUserVar[leggings], $getGlobalUserVar[boots]
**Stats:**
Level: **$getGlobalUserVar[level]** | Xp: **$getGlobalUserVar[xp]** 
Tools: $getGlobalUserVar[pickaxeIcon] $getGlobalUserVar[pickaxe], $getGlobalUserVar[axeIcon] $getGlobalUserVar[axe], $getGlobalUserVar[swordIcon] $getGlobalUserVar[sword]
<:DisMCE_money:900963736259538974> Money: **#CHAR#$getGlobalUserVar[money]**

**Total Mines:** $getGlobalUserVar[mines]
**Total Chops:** $getGlobalUserVar[chops]
**Total Fights:** $getGlobalUserVar[fights]
**Total Votes:** $getGlobalUserVar[timesVoted]

**Items**

$get[stoneIcon] Stones: $getGlobalUserVar[stones]
$get[ironOreIcon] Iron ores: $getGlobalUserVar[ironOres]
$get[copperOreIcon] Copper ores: $getGlobalUserVar[copperOres]
$get[goldOreIcon] Gold ores: $getGlobalUserVar[goldOres]
$get[diaOreIcon] Diamond ores: $getGlobalUserVar[diamondOres]
$get[coalIcon] Coals: $getGlobalUserVar[coals]
$get[ironIcon] Irons: $getGlobalUserVar[irons]
$get[copperIcon] Coppers: $getGlobalUserVar[coppers]
$get[goldIcon] Golds: $getGlobalUserVar[golds]
$get[diaIcon] Diamonds: $getGlobalUserVar[diamonds]

]
$footer[1;DisCraft MCE | $getVar[botVer]]
$color[1;#00008B]]

$let[copperOreIcon;<:DisMCE_copperOre:913250452307595264>]
$let[diaOreIcon;<:DisMCE_diamondOre:913250100573253642>]
$let[coalIcon;<:DisMCE_coal:913248549037281280>]
$let[goldOreIcon;<:DisMCE_goldOre:913251022124761120>]
$let[ironOreIcon;<:DisMCE_ironOre:900708095481741392>]
$let[copperIcon;<:DisMCE_copperIngot:901328176616202301>]
$let[spruceWoodIcon;<:DisMCE_spruceWood:913170133151805461>]
$let[birchWoodIcon;<:DisMCE_birchWood:913143614031400991>]
$let[oakWoodIcon;<:DisMCE_oakWood:913143073758928977>]
$let[enderPearlIcon;<:DisMCE_enderPearl:900898130868994118>]
$let[stringIcon;<:DisMCE_string:901107181791903764>]
$let[gunpowderIcon;<:DisMCE_gunpowder:900898152155082812>]
$let[boneIcon;<:DisMCE_bone:900898106437144606>]
$let[rottenFleshIcon;<:DisMCE_rottenFlesh:900740164798791700>]
$let[diaIcon;<:DisMCE_diamond:900968761983643648>]
$let[goldIcon;<:DisMCE_goldIngot:900709152979042305>]
$let[ironIcon;<:DisMCE_ironIngot:900894129532321803>]
$let[stoneIcon;<:DisMCE_stone:900708065077243935>]

$onlyIf[$getGlobalUserVar[started]==true;You haven't started yet! You can start by using \`$getServerVar[prefix]start\`]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}]