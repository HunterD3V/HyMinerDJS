module.exports = {
    type: 'loop',
    code: `
$editMessage[964244301250969682;{newEmbed:
{title:Status}
{field:Latency:__$pingms__}
{field:Version:__$getVar[botVer]__}
{field:Last status update:<t:$truncate[$divide[$js[Date.now()];1000]]:f>}
{color:$get[color]}
{footer: HyMiner | Enhanced Status}
}]

$let[color;$if[$ping<150;$getVar[green];$if[$ping<300;$getVar[yellow];$getVar[red]]]]
`,
    channel: '964031068317569044',
    every: 60000,
    executeOnStartup: true
}
