module.exports = [{
    name: 'eval',
    aliases: ['ev'],
    code: `
$eval[$message]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}, {
    name: 'evalAwait',
    type: 'awaited',
    code: `
$get[test]   
`
}]