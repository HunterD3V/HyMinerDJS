module.exports = {
	name: 'unbanUser',
	type: 'awaited',
	code: `
$setGlobalUserVar[banned;false]
`
}