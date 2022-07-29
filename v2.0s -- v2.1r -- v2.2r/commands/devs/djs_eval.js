module.exports = [{
    name: 'djseval',
    code: `
$djsEval[$message]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]