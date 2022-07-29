module.exports = {
    name: 'account',
    aliases: ['acc'],
    code: `
$title[1;Account Info]
$description[1;**Name**: $splitText[2]
**Password**: ||$if[$channelType==dm;$splitText[3];Hidden]||
**Created in**: $splitText[4]]

$textSplit[$getGlobalUserVar[logInInfo];/] 

$noMsgOnlyIf[$getVar[maintenance]==false;{execute:maintenanceError}]    
`
}