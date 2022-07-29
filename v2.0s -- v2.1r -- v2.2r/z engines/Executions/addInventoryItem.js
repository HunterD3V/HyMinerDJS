module.exports = {
    name: 'addInventoryItem',
    type: 'awaited',
    code: `
$setGlobalUserVar[inventory;$getGlobalUserVar[inventory;$authorId]$getCacheData[cache;addInventoryData_$authorId]/;$authorId]    
`
}