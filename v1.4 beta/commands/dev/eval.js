module.exports = [{
    name: "eval",
    code: `
$eval[$message]
$onlyIf[$getGlobalUserVar[isDev]==true;]
`
}, {
    name: 'testA',
    code: `
$replaceText[$replaceText[$textSplitMap[evaltest];|none|\n;];|none|;]
$textSplit[a:1/b:2/c:0/d:0/e:4/f:0;/]    
`
}, {
    type: 'awaited',
    name: 'evaltest',
    code: `
$if[$splitText[2]!=0;
Value => $message[1];|none|]
$message[2]
$textSplit[$message[1];:]
`
}]