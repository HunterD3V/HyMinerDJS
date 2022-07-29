module.exports = {
    name: 'lock',
    code: `
Locked :white_check_mark:
$modifyChannelPerms[$guildId;$channelId;-sendmessage]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
};