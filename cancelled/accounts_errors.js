module.exports = [{
    type: 'awaited',
    name: 'invalidUsernameError',
    code: `
$editMessage[$getCacheData[cache;accCacheMessage_$authorId];** **{newEmbed:{title:Invalid username}{description:We couldn't find the username \`$message[1]\`}{color:#ad2f2f}}]    
`
}, {
    type: 'awaited',
    name: 'incorrectPasswordError',
    code: `
$editMessage[$getCacheData[cache;accCacheMessage_$authorId];** **{newEmbed:{title:Incorrect password}{description:Incorrect password provided for username \`$message[1]\`}{color:#ad2f2f}}]  
`
}, {
    type: 'awaited',
    name: 'alreadyExistError',
    code: `
$editMessage[$getCacheData[cache;accCacheMessage_$authorId];{newEmbed:{title:Account already exists}{description:The account \`$message[1]\` already exists. 
Please, provide another username.}{color:#ad2f2f}}]
`
}]