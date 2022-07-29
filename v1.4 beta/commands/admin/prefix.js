module.exports = {
name: "prefix",
code: `$title[1;Success]
$description[1;<@$authorID> just set the bot prefix to **$message**]
$color[1;#3da633]
$setServerVar[prefix;$message]
$onlyIf[$hasPerms[$guildID;$authorID;admin]==true;You can't use that command; You're not an Admin!]
$onlyIf[$message!=;You need to write a prefix]
$onlyIf[$getVar[maintenance]==false||$guildID==825439710024433674||$getServerVar[botServerVer]!=v1.3b;The bot is on maintenance!\nReason: $getVar[maintReason]]`
}