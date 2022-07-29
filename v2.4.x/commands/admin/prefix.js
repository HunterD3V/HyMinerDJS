module.exports = {
    name: 'prefix',
    description: 'Changes the bot\'s prefix on the current server (default is hy!).',
    usage: ' <new prefix (8 characters max)>',
    display: 'true',
    aliases: ['set-prefix'],
    code: `
$setServerVar[prefix;$message]
$title[1;Success]
$description[1;Prefix have been successfully setted to \`$message\`.
Old prefix: \`$getServerVar[prefix]\`]
$color[1;#72d656]

$onlyIf[$charCount[$message]<=8;{newEmbed:{title:Invalid prefix}{description:Prefix can't have more than 8 characters!}{color:#ad2f2f}}]
$loadOnlyIf[$message!=;{"command":"$commandName"};getCommandInfo]

$onlyIf[$hasPerms[$guildId;$authorId;manageserver]==true;{newEmbed:{title:Permission needed}{description:You don't have enough permissions to execute that command!}{color:#ad2f2f}}]

$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]
`
}