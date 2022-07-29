module.exports = [{
    name: "setVer",
    code: `
    bot version updated
    $setGlobalUserVar[botVer;$message]
    $onlyIf[$getGlobalUserVar[isDev]==true;]
    `
}, {
    name: "maintenance",
    aliases: ['mntnc','mainte'],
    code: `
Maintenance is now $message[1]
Reason: $textTrim[$replaceText[$message;$message[1];;1]]
$setVar[maintenance;$message[1]]
$setVar[maintReason;$textTrim[$replaceText[$message;$message[1];;1]]]
$onlyIf[$message[1]==true||$message[1]==false;Invalid Type]
    `
}] // é melhor setVar, já q será global e n para um usuario especifico olha o maintReason, ta certo? só arrumar com o $replaceText, se n o motivo vira só uma palavra ata
