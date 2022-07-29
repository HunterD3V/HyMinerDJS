module.exports = [{
    name: 'exec',
    code: `
$exec[$message]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]