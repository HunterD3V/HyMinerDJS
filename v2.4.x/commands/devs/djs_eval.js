module.exports = [{
    name: 'js',
    code: `
$js[$message]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]