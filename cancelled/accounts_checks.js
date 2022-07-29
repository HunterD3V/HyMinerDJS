module.exports = [{
    type: 'awaited',
    name: 'usernameCheck',
    code: `
$if[$splitText[1]==$getCacheData[cache;accCacheUsername_$authorId];$message[1];]

$textSplit[$message[1];|]
`
}, {
    type: 'awaited',
    name: 'passwordCheck',
    code: `
$checkCondition[$message[1]==$getCacheData[cache;accCacheUsername_$authorId]|$getCacheData[cache;accCachePassword_$authorId]]
`
}]