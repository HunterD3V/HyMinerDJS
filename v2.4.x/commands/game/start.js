module.exports = {
    name: 'start',
    description: 'Starts the journey!',
    display: 'true',
    code: `

$title[1;The beggining of a new player]
$description[1;Hello, newcomer! You have just started a new adventure! Here are your initials tools:

$customEmoji[swords_wooden] $customEmoji[pickaxes_wooden] $customEmoji[axes_wooden] $customEmoji[shovels_wooden] $customEmoji[hoes_wooden]

***Basic commands***

\`$getServerVar[prefix]mine\`, \`$getServerVar[prefix]fight\`, \`$getServerVar[prefix]chop\` and \`$getServerVar[prefix]inventory\`

*Note: use $getServerVar[prefix]help <command> to see more info about that commads.*
]
$color[1;#72d656]
$image[1;https://media.discordapp.net/attachments/996273713861378091/998149534989418517/HyMiner.png]
$setGlobalUserVar[started;true]

$onlyIf[$getGlobalUserVar[started]==false;{newEmbed:{title:Already started}{description:You have already started.}{color:#ad2f2f}}]

$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}