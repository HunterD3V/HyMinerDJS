module.exports = {
    name: 'addInventoryItem',
    type: 'awaited',
    code: `
$setGlobalUserVar[inventory;$getGlobalUserVar[inventory;$authorId]$awaitData[item]|$awaitData[amount]/;$authorId]    
`
}