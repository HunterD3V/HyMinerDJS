module.exports = [{
    name: 'rbt',
    code: `
$reboot
$wait[1s]
$setVar[rbtMsg;$sendMessage[{newEmbed:{title:Reboot}{description:Rebooting...}{color:#5ca3e6}};yes]/$channelId]
$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]