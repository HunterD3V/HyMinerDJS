module.exports = {
	name: 'unban',
	code: `
$setGlobalUserVar[banTime;0;$get[user]]
$title[1;Success!]
$description[1; <@$get[user]> has been **unbanned** by <@$authorID>]
$footer[1;HyMiner]
$color[1;YELLOW]
$let[user;$findMember[$message[1];no]]

$onlyIf[$getGlobalUserVar[banTime;$Mentioned[1;no]]!=0;That user ain't banned!]

$onlyIf[$message!=;**Usage**: \`$getServerVar[prefix]unban <@user>\`]

$onlyIf[$hasRoles[902921277260578816;$authorID;903775378164813904;950891883322826813]==true;Error: you're not in the support server or you're missing permissions!]

$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]
`
}