module.exports = [{
    name: 'shop',
    description: 'Lists all available items to buy.',
    usage: ' <category> (subcategory)',
    display: 'true',
    code: `
$sendMessage[{newEmbed:
{title:Invalid category}
{description:We couldn't find this category: \`$message[1]\`}
{color:$getVar[red]}
}]

$loadOnlyIf[$toLowerCase[$message[1]]!=armors;{"msg":"$toLowerCase[$message]"};armorsShop]
$loadOnlyIf[$toLowerCase[$message[1]]!=tools;{"msg":"$toLowerCase[$message]"};toolsShop]
$onlyIf[$toLowerCase[$message[1]]!=items;{newEmbed:
{title:Items}
{description:
$textSplitMap[mapItems]
}
{color:$getVar[yellow]}
{footer:$getServerVar[prefix]buy <item>}
}]

$textSplit[$hyMiner[hyminer.items.all.sort()];,]

$onlyIf[$message!=;{newEmbed:
{title:Categories}
{description:\`$getServerVar[prefix]shop items\`
\`$getServerVar[prefix]shop tools\`
\`$getServerVar[prefix]shop armors\`}
{color:$getVar[yellow]}
}]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
$loadOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{};maintenanceError]
`
}, {
    type: 'awaited',
    name: 'mapItems',
    code: `
$customEmoji[money] **$hyMiner[hyminer.items.$message[1]]** | $customEmoji[$message[1]] $toLocaleUpperCase[$replaceText[$message[1];_; ]]
`
}, {
    type: 'awaited',
    name: 'mapTools',
    code: `
$customEmoji[money] $ **$abbreviate[$hyMiner[hyminer.tools.$get[data].$message[1]]]** | $customEmoji[$get[data]_$message[1]] $toLocaleUpperCase[$message[1] $get[sindata]]

$let[sindata;$if[$stringEndsWith[$get[data];s]==true;$replacetext[$get[data];s;;-1];$get[data]]]
$let[data;$getCacheData[cache;mapToolsData]]
`
}, {
    type: 'awaited',
    name: 'mapArmors',
    code: `
$customEmoji[money] **$hyMiner[hyminer.armors.$toLowercase[$get[data].$message[1]]]** | $customEmoji[$tolowercase[$get[pldata]_$get[data]]] $toLocaleUpperCase[$get[data] $message[1]]

$let[pldata;$if[$stringEndsWith[$message[1];s]==false;$message[1]s;$message[1]]]
$let[data;$getCacheData[cache;mapArmorsData]]
`
}, {
    type: 'awaited',
    name: 'toolsShop',
    code: `
$sendMessage[{newEmbed:
{title:Tools}
{description:$textSplitMap[mapTools]}
{color:$getVar[yellow]}
{footer:$getServerVar[prefix]buy <tool>}
}]
$setCacheData[cache;mapToolsData;$get[item]]

$textSplit[$hyMiner[hyminer.tools.types];,]

$onlyIf[$hyMiner[hyminer.tools.$get[item]]!=undefined;{newEmbed:
{title:Error}
{description:We couldn't find this subcategory: \`$get[item]\`}
{color:$getVar[red]}
}]

$onlyIf[$get[item]!=;{newEmbed:
{title:Subcategories}
{description:
\`Swords\`
\`Pickaxes\`
\`Axes\`
\`Shovels\`
\`Hoes\`}
{color:$getVar[yellow]}
}]

$let[item;$toLowerCase[$textTrim[$replaceText[$awaitData[msg];$splitText[1];;1]]]]

$textSplit[$awaitData[msg]; ]
`
}, {
    type: 'awaited',
    name: 'armorsShop',
    code: `
$sendMessage[{newEmbed:
{title:Armors}
{description:$textSplitMap[mapArmors]}
{color:$getVar[yellow]}
{footer:$getServerVar[prefix]buy <armor>}
}]
$setCacheData[cache;mapArmorsData;$get[item]]

$textSplit[$hyMiner[hyminer.armors.types];,]

$onlyIf[$hyMiner[hyminer.armors.$get[item]]!=undefined;{newEmbed:
{title:Error}
{description:We couldn't find this subcategory: \`$get[item]\`}
{color:$getVar[red]}
}]

$onlyIf[$get[item]!=;{newEmbed:
{title:Subcategories}
{description:
\`Leather\`
\`Iron\`
\`Golden\`
\`Diamond\`
\`Netherite\`}
{color:$getVar[yellow]}
}]

$let[item;$toLowerCase[$textTrim[$replaceText[$awaitData[msg];$splitText[1];;1]]]]

$textSplit[$awaitData[msg]; ]
`
}]