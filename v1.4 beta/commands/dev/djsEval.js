module.exports = [{
    name: "djseval",
    code: `
$djsEval[$message]
$onlyIf[$getGlobalUserVar[isDev]==true;]
`
}]