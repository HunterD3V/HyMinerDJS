module.exports = [{
    name: 'clan-info',
    code: `
    $onlyIf[$getGlobalUserVar[joinedClan]!=;You're not in  a clan!]
    $title[1;**$username**'s current clan]
    $description[1;clan: $getGlobalUserVar[joinedClan]
    clan level: $getVar[clanLevel] | $getVar[clanXP]
    clan description: $getVar[joinedClanDescr]]
    $footer[1;clan]
    $color[1;RANDOM]
`
},  {
    name: 'clan-join',
    code: `
    $onlyIf[$checkContains[$getVar[clans];$message]==true;clan n\`$message\` not found]
    $onlyIf[$]
  `
}]
    
const onlyIf = `$onlyIf[$getServerVar[botServerVer]==21y01d`

