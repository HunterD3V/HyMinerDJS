 module.exports = {
    name: "mine",
    aliases: ["m"],
    code: `
You mined $random[2;20] stone <:DisMCE_stone:900708065077243935> with your $getGlobalUserVar[pickaxeIcon] $toLocaleUppercase[$getGlobalUserVar[pickaxe]]
$setGlobalUserVar[stones;$sum[$getGlobalUserVar[stones];$random[2;20]];$authorID]
$cooldown[5s;woah, too fast buddy]
$setGlobalUserVar[mines;$sum[$getGlobalUserVar[mines];1];$authorID]
$onlyIf[$getGlobalUserVar[started]==true;You dont have a profile yet! Make one with \`$getServerVar[prefix]start\`]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}