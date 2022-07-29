module.exports = [{
    name: "exec",
    code: `
$exec[$message]
$onlyIf[$getGlobalUserVar[isDev]==true;]
`
}]