module.exports = {
    type: 'awaited',
    name: 'notStartedError',
    code: `
$sendMessage[{newEmbed:
{title:Error}
{description:You haven't started yet!
Use **$getServerVar[prefix]start** to start your adventure!}{color:#ad2f2f}}]    
`
}