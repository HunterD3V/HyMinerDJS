module.exports = {
    name: 'removeInventoryItem',
    type: 'awaited',
    code: `
$setGlobalUserVar[inventory;$replaceText[$getGlobalUserVar[inventory;$authorId];$getCacheData[Group;cache;removeInventoryData_$authorId]/;];$authorId]
`
}