/*
module.exports = [{
	name: '$alwaysExecute',
	code: `
$setGlobalUserVar[captcha;$randomString[16]]

$onlyIf[$getGlobalUserVar[captcha]==;]

$setGlobalUserVar[compCap;true]

$onlyIf[$getGlobalUserVar[verifLvl]>15;]

$setGlobalUserVar[userTime;$dateStamp]

$if[$checkCondition[$math[($dateStamp - $getGlobalUserVar[userTime]) / 1000]<3||$getGlobalUserVar[verifLvl]>15]==true&&$getGlobalUserVar[compCap]==false;{execute:spamMod-addVerifLvl}]

$onlyIf[$djsEval[let cmds = ['mine', 'm', 'c', 'chop', 'dig', 'd', 'fight', 'f', 'enderdragon', 'sell', 'give', 'buy']

cmds.includes("$advancedTextSplit[$replaceText[$message;$getServerVar[prefix];;1]; ;1]");yes]==true;]

$if[$getGlobalUserVar[compCap]==true;{execute:spamMod-addVerifLvl}]

$onlyIf[$getGlobalUserVar[banned]==false;]
$suppressErrors
`
}, {
	type: 'awaited',
	name: 'spamMod-addVerifLvl',
	code: `
$setGlobalUserVar[verifLvl;$math[$getGlobalUserVar[verifLvl] + 1]]
`
}, {
	name: '$alwaysExecute',
	code: `
$if[$message==$getGlobalUserVar[captcha];{execute:spamMod-captchaSuccess};{execute:spamMod-captchaWrong}]

$onlyIf[$getGlobalUserVar[compCap]==true;]
`
}, {
	type: 'awaited',
	name: 'spamMod-captchaSuccess',
	code: `
$setGlobalUserVar[verifLvl;0]
$setGlobalUserVar[captcha;]
$setGlobalUserVar[compCap;false]

$sendMessage[$customEmoji[emoji_certo] **You've passed verification!**
Now you can continue using HyMiner normally. Please, don't spam commands!]
`
}, {
	type: 'awaited',
	name: 'spamMod-captchaWrong',
	code: `
$sendMessage[:exclamation: **V3R1F1C4T10N!!!**
Complete the captcha to continue using HyMiner, if you **fail 3 times** you will be **banned** from HyMiner **for 1 day**.

Your captcha code: \`$getGlobalUserVar[captcha]\`]

$loadOnlyIf[$getGlobalUserVar[verifLvl]<19;{};spamMod-ban]
`
}, {
	name: 'spamMod-ban',
	type: 'awaited',
	code: `
$setGlobalUserVar[verifLvl;0]
$setGlobalUserVar[captcha;]
$setGlobalUserVar[compCap;false]

$sendDM[**You've been banned!**
You've been banned from using HyMiner commands for **24 hours**.

Reason:
\`\`\`
Captcha verification failed.		
\`\`\`

If you think this is an error, you can go to our HyMiner support:
https://discord.gg/GZQrhyjfXe]

$if[a==a;{execute:bannedError}]

$setGlobalUserVar[banTime;$math[$dateStamp + 86400000]]
$setGlobalUserVar[banned;true]
`
}]

// olá!!!!

/*
$setUserVar[verification;$getObject]
$addObjectProperty[$get[verifyID];{
"verificationCaptcha": "$randomString[8]",
"target": "$authorId",
"date": "$parseDate[$dateStamp;day]",
"expirationDate": "$get[captcha_expirationDate]",
"type": "captcha"
}];$resetUserVar[verification]]

Verification: send captcha
$getUserVar[verification]

$let[captcha_expirationDate;$sum[$minute;5]]
$let[verifyID;verification_Id#$randomString[16]]
*/