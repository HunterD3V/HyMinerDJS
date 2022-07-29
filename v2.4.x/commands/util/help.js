module.exports = [{
    name: 'help',
    description: 'Gives help about Bot and commands.',
    usage: ' (command name)',
    display: 'true',
    aliases: ['commands', 'cmds'],
    code: `
$loadOnlyIf[a==b;{"command":"$splitText[1]"};getCommandInfo]

$onlyIf[$get[search]!=;{newEmbed:{title:Error}{description:We couldn't find this command: \`$message\`}{color:$getVar[red]}}]

$textSplit[$get[search];,]
$let[search;$findElementByStart[$get[cmdsSearch];$message;,]]

$onlyIf[$message!=;{newEmbed:{title:Command List}{description:

$textSplitMap[cmdmap] $textSplit[$get[cmds];,]}{color:$getVar[lightBlue]}{footer:Use "$getServerVar[prefix]$commandName (command name)" to search a command!}}]

$let[cmds;start,inventory,mine,fight,chop,sell,prefix,help,support,buy,shop,dig,invite]
$let[cmdsSearch;start,mine,fight,chop,sell,prefix,set-prefix,help,commands,cmds,support,inventory,buy,shop,dig,invite]

$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]
`
}, {
    type: 'awaited',
    name: 'cmdmap',
    code: `
\`$getServerVar[prefix]$message[1]\`
$commandInfo[$message[1];description]
⠀\n
`
}]