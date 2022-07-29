module.exports = [{
    type: 'awaited',
    name: 'invalidClanNameError',
    code: `
$editMessage[$getCacheData[Group;cache;clanName_$authorId];{newEmbed:{title:Invalid clan}{description:We couldn't find the clan \`$getCacheData[Group;cache;clanName_$authorID]\`}}]
`
}]