module.exports = [{
    name: 'eval',
    code: `
$eval[$message]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}, {
    name: "gift",
    code: `
discord.gift/$randomString[24]$addButton[1;New gift;success;evalCmd]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`,
}, {
    name: "evalCmd",
    type: "interaction",
    prototype: "button",
    code: `
$interactionUpdate[discord.gift/$randomString[24];;{actionRow:{button:New gift:success:evalCmd:false}}]
`
}]