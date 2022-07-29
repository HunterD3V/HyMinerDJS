module.exports = [{
    type: 'awaited',
    name: 'getCommandInfo',
    code: `
$sendMessage[{newEmbed:{title:$toLocaleUppercase[$commandInfo[$get[command];name]] Command}{description:
**Description**

$commandInfo[$get[command];description]

**Usage**

\`$getServerVar[prefix]$commandInfo[$get[command];name]$commandInfo[$get[command];usage]\`

**Aliases**

$if[$get[result]!=\`$getServerVar[prefix]\`;$get[result];\`This command doesn't have aliases.\`]
$let[result;$replaceText[$textSplitMap[infomap];\n;, ]]
$textSplit[$commandInfo[$get[command];aliases];,]}{color:$getVar[lightBlue]}}]    

$let[command;$awaitData[command]]
`
}, {
    type: 'awaited',
    name: 'infomap',
    code: `
\`$getServerVar[prefix]$message[1]\`    
`
}]