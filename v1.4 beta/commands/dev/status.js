module.exports = {
    name:"status",
    code: `
    $onlyIf[$getGlobalUserVar[isDev]==true;You can't use that command; You aren't a developer!]`
}