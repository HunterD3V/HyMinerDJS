module.exports = {
    name: 'register',
    aliases: ['reg', 'signin', 'sign-in'],
    code: `
$editMessage[$getCacheData[cache;accCacheMessage_$authorId];{newEmbed:{title:Account created}{description:The account \`$message[1]\` have been successfully created. You have been automatically connected to the account.}{color:#72d656}}]
$setGlobalUserVar[logInInfo;true/$message[1]/$message[2]/$day, $month, $year]
$setVar[registeredInfo;$getVar[registeredInfo]$message[1]|$message[2]|$day, $month, $year/]

$noMsgonlyIf[$checkContains[$replaceText[$textSplitMap[usernameCheck];\n;,];true]!=true;{execute:alreadyExistError}]

$setCacheData[cache;accCacheMessage_$authorId;$sendMessage[{newEmbed:{title:Verifying account...}{description:Please, be patient, we are verifying the account...}{color:#5ca3e6}};yes]]
$setCacheData[cache;accCacheUsername_$authorId;$message[1]]
$textSplit[$getVar[registeredInfo];/]

$onlyIf[$message[2]==$message[3];{newEmbed:{title:Password doesn't match}{description:The provided password and the corfirmation password doesn't match!}{color:#ad2f2f}}]
$onlyif[$message[1]!=&&$message[3]!=;{newEmbed:{title:Usage}{description:\`$getServerVar[prefix]signin <username> <password> <confirm password>\`}{color:#5ca3e6}}]
$onlyif[$splitText[1]==false;{newEmbed:{title:Can't register}{description:You are logged-in as \`$splitText[2]\`, so you can't register for now.}{color:#ad2f2f}}]

$textSplit[$getglobaluservar[logInInfo];/]

$onlyIf[$channelType==dm;{newEmbed:{title:Safety warn}{description:For your safety, you are only able to use that command in my DM.}{color:#ad2f2f}}]

$noMsgOnlyIf[$getVar[maintenance]==false;{execute:maintenanceError}] 
`
}