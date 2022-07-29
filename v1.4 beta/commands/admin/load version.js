module.exports = [{
    name: "load",
    code: `
$setServerVar[botServerVer;$get[version]]
$editIn[1s;|;\\ ;-;/;|;\\ ;-;/;|;\\ ;-;/;|;\\ ;-;/;Successfully loaded version **$get[version]** in the current server!]
Loading version...
$setServerVar[loading;$get[version]]

$let[version;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;original-beta-2021.09.11-1.0.0;v1.0b];original-inDev-2021.28.11-1.3.0;v1.3dev];old-early_beta-2021.09.11-0.92;v0.92b];mc!load old-indev-2021.13.7-0.78.576
;v0.78dev];original-snapshot-2021.11.30-2.0.0.01;21y01d snapshot (2.0.0)]]

$onlyIf[$message==old-early_beta-2021.09.11-0.92||$message==original-beta-2021.09.11-1.0.0||$message==original-inDev-2021.28.11-1.3.0||$message==mc!load old-indev-2021.13.7-0.78.576||$message==original-snapshot-2021.11.30-2.0.0.01;Invalid version provided.]
$onlyIf[$message!=;Please, provide a version.]
$onlyIf[$getServerVar[loading]==false;Please, wait for **$getServerVar[loading]** completely load.]

    `
}, {
    name: 'get-version',
    aliases: ['get-ver', 'getver', 'gver', 'getv'],
    code: `$title[1;Bot Version]
    $description[1;actual loaded bot version: $getServerVar[botServerVer]
    actual bot version: $getVar[botVer]]
    $footer[1;to load versions, use mc!load. join support server for available versions]
    $addTimestamp[1]
`
}, {
    name: 'snapshot-info',
    code: `
    $onlyIf[$getServerVar[botServerVer]==21y01d||$memberExists[$authorID;902921277260578816]==true||$hasRoles[902921277260578816;$authorid;904957879176556575]==true;you're not qualified to view snapshots or you haven't loaded a snapshot!]
    $title[1;**Snapshot Info**]
    $description[1;**What's cooking on $getServerVar[botServerVer] snapshot? Here's the info!**
    
    *What's new?*

    ** **-new leveling system added to testing
    ** **-new currency system added to testing
    ** **-new inventory look
    ** **-added copper, obsidian, ruby, prism, bedrock ore, amethyst block
    ** **-new christmas event scheduled for december 9
    ** **-new clan wars
    ** **-new login system added to testing
    ** **-new shop system
     
    *Bug Fixes:*

    ** **-fixed mc!mine mining 0 stones/ores
    ** **-fixed emotes not working ]
     $footer[1;Snapshots | Discraft MCE v2.0.0 snapshot]
     $color[1;843691]

`
}]