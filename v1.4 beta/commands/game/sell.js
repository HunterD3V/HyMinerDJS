module.exports = {
    name: "sell",
    code: `
$title[1;Succesfully sold stones]
$description[1;
You sold **$message[2] $get[$message[1]Icon] $message[1]s** for **#CHAR#$multi[$message[2];$get[$message[1]Value]]**]
$color[1;RANDOM]
$thumbnail[1;$authorAvatar]

$onlyif[$message[2]!=0;Invalid amount!]
$onlyif[$message[2]<$getGlobalUserVar[$message[1]s]||$message[2]==$getglobaluservar[$message[1]s];You don't have $message[2] $message[1]s to sell!]
$onlyIf[$message[2]!=;You didn't set an amount to sell!]
$onlyif[$message[1]==stone||$message[1]==iron-ore||$message[1]==gold-ore||$message[1]==copper-ore||$message[1]==diamond-ore||$message[1]==coal-ore;Invalid item!]
$onlyIf[$message[1]!=;You didn't set an item to sell!]
$onlyIf[$getGlobalUserVar[started]==true;You dont have a profile yet! Make one with \`$getServerVar[prefix]start\`]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]
`
}