module.exports = {
    name: 'start',
    code: `

$title[1;You started]
$description[1;You have just started the journey! Here are your initials tools:

$customEmoji[swords_wooden] $customEmoji[pickaxes_wooden] $customEmoji[axes_wooden] $customEmoji[shovels_wooden] $customEmoji[hoes_wooden]

***Basic commands***

\`$getServerVar[prefix]mine\`, \`$getServerVar[prefix]fight\` and \`$getServerVar[prefix]chop\`
]
$color[1;#72d656]
$setGlobalUserVar[started;true]

$onlyIf[$getGlobalUserVar[started]==false;{newEmbed:{title:Already started}{description:You have already started.}{color:#ad2f2f}}]

$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}] 
`
}