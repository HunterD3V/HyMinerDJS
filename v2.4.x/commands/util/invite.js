module.exports = {
    name: 'invite',
    description: 'Invite **[HyMiner](https://discord.com/oauth2/authorize?client_id=917496158664949800&scope=bot)** to your server!',
    display: 'true',
    aliases: ['add'],
    code: `
 $sendMessage[{newEmbed:{title:Invite}{description: **[Add HyMiner to your server](https://top.gg/bot/917496158664949800)**}{color: $getVar[green]}{footer:HyMiner | $getVar[botVer]}}]
`
}