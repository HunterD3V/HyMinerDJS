module.exports = {
    name: "login",
    aliases: ['log-in'],
    code: `
$editMessage[$getCacheData[cache;accCacheMessage_$authorId];** **{newEmbed:{title:You have logged-in}{description:You have successfully logged-in to \`$message[1]\`}{color:#72d656}}]
$setGlobaluserVar[logInInfo;true/$message[1]/$message[2]]

$noMsgOnlyIf[$checkContains[$replaceText[$textSplitMap[passwordCheck];\n;,];true]==true;{execute:incorrectPasswordError}]
$noMsgOnlyIf[$checkContains[$replaceText[$textSplitMap[usernameCheck];\n;,];true]==true;{execute:invalidUsernameError}]

$setCacheData[cache;accCacheMessage_$authorId;$sendMessage[** **{newEmbed:{title:Verifying account...}{description:Please, be patient, we are verifying the account...}};yes]]
$setCacheData[cache;accCachePassword_$authorId;$message[2]]
$setCacheData[cache;accCacheUsername_$authorId;$message[1]]
$textSplit[$getVar[registeredInfo];/]

$onlyIf[$message[1]!=&&$message[2]!=;{newEmbed:{title:Usage}{description:\`$getServerVar[prefix]login <username> <password>\`}{color:#5ca3e6}}]
$onlyIf[$splitText[1]==false;{newEmbed:{title:Already logged-in}{description:You are already logged-in as \`$splitText[2]\`}{color:#ad2f2f}}]

$textSplit[$getglobaluservar[logInInfo];/]

$onlyIf[$channelType==dm;{newEmbed:{title:Safety warn}{description:For your safety, you are only able to use that command in my DM.}{color:#ad2f2f}}]

$noMsgOnlyIf[$getVar[maintenance]==false;{execute:maintenanceError}]`
}