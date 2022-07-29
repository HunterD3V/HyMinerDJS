module.exports = {
    type: 'awaited',
    name: 'findInvItem',
    code: `
$if[$get[name]==$getCacheData[cache;findInvData_$authorId];$message[1]]
$let[name;$splitText[1]]
$textSplit[$message[1];|]
`
} 