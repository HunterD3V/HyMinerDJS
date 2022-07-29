module.exports = {
    type: 'awaited',
    name: 'notStartedError',
    code: `
$sendMessage[{newEmbed:{title:Error}{description:You didn't started yet!
Use **$getServerVar[prefix]start** to start right now!}{color:#ad2f2f}}]    
`
}