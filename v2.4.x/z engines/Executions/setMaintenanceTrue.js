module.exports = {
    type: 'awaited',
    name: 'setMaintenanceTrue',
    code: `
$sendMessage[{newEmbed:{title:Maintenance toggled}{description:Maintenance have been toggled to **true**.}{color:#72d656}}]
$setVar[maintenance;true]    
`
}