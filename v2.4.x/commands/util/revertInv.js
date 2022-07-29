module.exports = {
	name: 'revertInv',
	code: `
$sendMessage[{newEmbed:
{title:Success}
{description:Backed up your inventory and reverted changes in your inventory to last backup.}
{color:$getVar[green]}
}]

$setGlobalUserVar[inventoryBkp;$get[oldInv]]
$setGlobalUserVar[inventory;$getGlobalUserVar[inventoryBkp]]
$let[oldInv;$getGlobalUserVar[inventory]]

$onlyIf[$checkContains[$getGlobalUserVar[inventoryBkp];/]==true&&$checkContains[$getGlobalUserVar[inventoryBkp];|]==true;{newEmbed:
{title:Error}
{description:No backup found or the last backup is corrupted!}
{color:$getVar[red]}
}]

$loadOnlyIf[$getGlobalUserVar[started]==true;{};notStartedError]
`
}