module.exports = [{
    type: 'awaited',
    name: 'invalidClanNameError',
    code: `
$editMessage[$getCacheData[cache;clanName_$authorId];{newEmbed:{title:Invalid clan}{description:We couldn't find the clan \`$getCacheData[cache;clanName_$authorID]\`}}]
`
}]