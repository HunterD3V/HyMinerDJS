module.exports = [{
	name: 'enderdragon',
	alisases: ['endr','ed'],
	display: 'true',
	code: `
$reply
$title[1;Ender Dragon!]
$description[1;Fight ender dragon!
how to fight: press the 'attack' button down this embed to make a attack using your sword!

$customEmoji[action_bossHealth_iconPNG] **Ender dragon HP: $abbreviate[$getVar[enderdragonHP];3]** ]
$footer[1;HyMiner]
$color[1;$getVar[enderPurpur]]
$thumbnail[1;https://media.discordapp.net/attachments/930472768162656346/973730740816715816/ezgif.com-gif-maker_4.gif]

$let[userID;$authorID]
$if[$isBot[$authorID]==true;$title[1;Error]
$description[1; **Error:** \`Failed_to_verify_UserID. Reason:User-may-be-a-bot\`
\n**Location:** \`cmd:enderDragon_command\`] 
$color[1;RED]]

$addButton[1;Attack;danger;action_attack_enderDragon-$authorId;no;976325304819806248]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]


$onlyIf[$hasRoles[902921277260578816;$authorID;967309071604654080]==true;Error: You're not a Beta Tester!]

$if[$getGlobalUserVar[banned]==true;{execute:unbanUser}]

$loadOnlyIf[$getGlobalUserVar[banned]==false||$get[timeLeft]<=0;{};bannedError]

$let[timeLeft;$math[$getGlobalUserVar[banTime] - $dateStamp]]
`
},
{
	type: 'interaction',
	prototype: 'button',
	code: `

$interactionUpdate[** **;{newEmbed:{title:Ender dragon!}
{description: You attacked **Ender dragon** with your $customEmoji[swords_$get[sword]] **$get[sword] sword** and dealt **$get[damage-$get[sword]]** damage

$customEmoji[action_bossHealth_iconPNG] **Ender dragon HP: $abbreviate[$sub[$getVar[enderdragonHP];$get[damage-$get[sword]]];3]** }
{footer:HyMiner}
{color: $getVar[enderPurpur]}
{thumbnail:https://media.discordapp.net/attachments/930472768162656346/973730740816715816/ezgif.com-gif-maker_4.gif}}
;{actionRow:{button:Attack:danger:action_attack_enderDragon-$authorId:no:<:action_attackBoss_iconPNG:976325304819806248>}}]


$setVar[enderdragonHP;$sub[$getVar[enderdragonHP];$get[damage-$get[sword]]]]

$c[==||==========> DAMAGE TABLE <==========||==]

$let[damage-dragon;$random[176;1560]]
$let[damage-greatium;$random[123;690]]
$let[damage-prism;$random[24;630]]
$let[damage-netherite;$random[64;890]]
$let[damage-diamond;$random[32;480]]
$let[damage-amethyst;$random[16;240]]
$let[damage-golden;$random[8;120]]
$let[damage-iron;$random[4;60]]
$let[damage-stone;$random[2;30]]
$let[damage-wooden;$random[1;15]]

$c[==||==========> END. <==========||==]

$let[sword;$splitText[1]]
$textSplit[$getGlobalUserVar[tools];,]

$cooldown[3m;{newEmbed:{title:Enderdragon}{description:Cooldown: You're on cooldown! please wait **3min** to use **$getServerVar[prefix]enderdragon** again!}{color:RED}}]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]

$loadOnlyIf[$splitText[2]==$authorId;{};awaited_invalidId_attackDragon]
$onlyIf[$splitText[1]==action_attack_enderDragon;]

$textSplit[$interactionData[customId];-]
`
},

{
	type: 'awaited',
	name: 'awaited_invalidId_attackDragon',
	code: `
$interactionReply[;{newEmbed:{title:Error}{description: **Error:** \`button_userID_doesn't_match_actualID. Reason:you're-not-the-embed-author\`
\n**Location:** \`awaited:invalidID_attackDragon\`}{color:RED}};;;;yes]
`
}]

/*
{field;Error; \`button_userID_doesn't_match_actualID;Reason:you're_not_the_embed_author\`}
{field;Location; \`awaited:invalidID_attackDragon\`}
*/

// n usa : pq isso buga