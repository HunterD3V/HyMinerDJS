module.exports = {
    type: 'awaited',
    name: 'inventoryMap',
    code: `
$if[$get[value]!=0&&$message[1]!=;$customEmoji[$get[name]] $toLocaleUppercase[$replaceText[$get[name];_; ]]: **$get[value]**$if[$get[condition]==false;<enter>]

$let[condition;$checkCondition[$findTextSplitIndex[$message]==$getTextSplitLength]]
$textSplit[$replaceText[$getGlobalUserVar[inventory;$authorId];/;;-1];/]
$let[value;$abbreviate[$splitText[2];1]]
$let[name;$splitText[1]]
$textSplit[$message[1];|]
`
}