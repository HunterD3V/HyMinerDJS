module.exports = {
    name: 'unlock',
    code: `
Unlocked :white_check_mark:
$modifyChannelPerms[$guildId;$channelId;/sendmessage]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
};