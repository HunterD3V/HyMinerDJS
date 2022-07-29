module.exports = [{
    name: 'rbt',
    code: `
$reboot

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]