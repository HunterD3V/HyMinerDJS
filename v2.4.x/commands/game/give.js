module.exports = {
	name: 'give',
	description: 'gives money from your bank to a user.',
	usage: ' <@user> <amount>',
	code: `
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$messageSlice[1]];$authorID]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1;no]];$messageSlice[1]];$mentioned[1;no]]

$title[1;Transaction Complete]
$description[1;<@$authorID> transferred $customEmoji[money]** $$messageSlice[1]** to <@$mentioned[1;no]>]
$footer[1;HyMiner]
$color[1;GREEN]


$onlyIf[$messageSlice[1]<$getGlobalUserVar[money;$authorID];<@$authorID> | Error: you can't give more than you have!]
$onlyIf[$getGlobalUserVar[money;$authorID]!=0;<@$authorID> | Error: you don't have money to give!]
$onlyIf[$messageSlice[1]!=;<@$authorID> | Error: invalid amount or mentioned]
$onlyIf[$message[1]!=;<@$authorID> | Error: invalid amount or mentioned]
$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$onlyIf[$getGlobalUserVar[compCap]==false;]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
}