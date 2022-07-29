module.exports = {
	name: 'ban',
	code: `
$setGlobalUserVar[verifLvl;0]
$setGlobalUserVar[captcha;]
$setGlobalUserVar[compCap;false]

$sendDM[**You've been banned!**
You've been banned from using HyMiner commands for **$parseDate[$math[$message[2] * 1000];time]**.

Reason:
\`\`\`
$if[$messageSlice[2]==;No reason provided;$messageSlice[2]]		
\`\`\`

If you think this is an mistake, you can go to our HyMiner support:
https://discord.gg/GZQrhyjfXe]

$setGlobalUserVar[banTime;$math[$dateStamp + ($message[2] * 1000)];$get[user]]
$setGlobalUserVar[banned;true;$get[user]]

$title[1;Ban]
$description[1;<@$authorID> banned <@$get[user]>
Duration: $message[2]
Reason: $if[$messageSlice[2]==;No reason provided;$messageSlice[2]]
$color[1;RED]

$onlyIf[$getGlobalUserVar[banned;$get[user]]==false;Error: the user is banned already]
$onlyIf[$isNumber[$message[2]]==true;Error: \`$Message[2]\` is not a number!]
$onlyIf[$get[user]!=;Error: invalid mentioned]

$let[user;$findMember[$message[1];no]]

$onlyIf[$hasRoles[902921277260578816;$authorID;903775378164813904;950891883322826813]==true;Error: you're not in the support server or you're missing permissions!]

$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

`
}
/*
$setGlobalUserVar[banTime;$math[$dateStamp + $message]]

$setGlobalUserVar[banned;true]


$onlyIf[$isNumber[$messageS]==true
*/