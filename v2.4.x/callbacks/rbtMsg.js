module.exports = [{
    type: 'ready',
    code: `
$editMessage[$splitText[1];{newEmbed:{title:Reboot}{description:Rebooted.}{color:#72d656}};$splitText[2]]

$noMsgOnlyIf[$messageExists[$splitText[1];$splitText[2]]==true]

$textSplit[$getVar[rbtMsg];/]

$createCache[Group;cache]

$suppressErrors
`
}]