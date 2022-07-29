module.exports = {
    name: 'toggle-maintenance',
    aliases: ['tm'],
    code: `
$title[1;Maintenance toggled]
$description[1;Maintenance have been toggled to **false**.]
$color[1;#72d656]
$setVar[maintenance;false]

$noMsgOnlyIf[$getVar[maintenance]==true;{execute:setMaintenanceTrue}]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}
 