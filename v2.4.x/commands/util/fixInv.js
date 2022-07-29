module.exports = {
	name: 'fixInv',
	code: `
$sendMessage[{newEmbed:
{title:Success}
{description:Successfully fixed and backed up your inventory.
Use \`$getServerVar[prefix]revertInv\` if something went wrong.
}
{color:$getVar[green]}
}]

$setGlobalUserVar[inventory;$get[fixedInv]]
$setGlobalUserVar[inventoryBkp;$getGlobalUserVar[inventory]]

$onlyIf[$get[fixedInv]!=inventoryHasNothing;{newEmbed:
{title:Error}
{description:Your inventory is empty.}
{color:$getVar[red]}
}]

$let[fixedInv;$djsEval[const rawInv = "$getGlobalUserVar[inventory]"
if (rawInv.includes('/') && rawInv.includes('|')) {
	let separatedInv = rawInv.split("/")
	let remove = separatedInv.pop()
	
	let stackedItems = {}
	
	for (const itemData of separatedInv) {
		let separatedValues = itemData.split("|")
		let item = separatedValues.shift()
		let amount = separatedValues.shift()
		
		stackedItems[item] == undefined ? stackedItems[item] = Number(amount) : stackedItems[item] += Number(amount)
	}
	
	let invArray = Object.entries(stackedItems)
	
	let entriesResult = "";
	
	for (let [item, amount] of invArray) {
		entriesResult += \`\${item}|\${amount}/\`
	}
	
	entriesResult
} else {
	"inventoryHasNothing"
}
;yes]]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
`
}