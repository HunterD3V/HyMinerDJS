module.exports = {
    name: 'leave',
    code: `
$title[1;You leaved]
$description[1;You have leaved \`$splitText[2]\`.]
$color[1;#72d656]
$setGlobalUserVar[logInInfo;false]
$onlyIf[$splitText[1]==true;{newEmbed:{title:Not logged-in}{description:You aren't logged-in.}{color:#ad2f2f}}]
$textSplit[$getGlobalUserVar[logInInfo];/]

$noMsgOnlyIf[$getVar[maintenance]==false;{execute:maintenanceError}]
`
}