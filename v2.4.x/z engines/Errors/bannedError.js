module.exports = {
	type: 'awaited',
	name: 'bannedError',
	code: `
$sendMessage[{newEmbed:{title:Banned}{description:You're banned from using HyMiner game commands.
You need to wait more **$parseDate[$get[timeLeft];time]** to use game commands again.}{color:#ad2f2f}}]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}