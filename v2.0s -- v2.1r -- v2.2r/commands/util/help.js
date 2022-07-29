module.exports = {
    name: 'help',
    aliases: ['h'],
    code: `
$onlyIf[a==b;{newEmbed:{title:Help}{description:Hello! I'm **HyMiner**, a Discord Bot with a Minecraft theme. Here are a list with all my available commands:

**Support**

\`$getServerVar[prefix]help\` - Give you help about commands.
\`$getServerVar[prefix]support\` - Redirect you to the **[support server](https://discord.gg/58AmmC9Cec)**.

**Game**

\`$getServerVar[prefix]start\` - Starts the journey!
\`$getServerVar[prefix]mine\` - Mines with your pickaxe.
\`$getServerVar[prefix]fight\` - Kills some mobs.
\`$getServerVar[prefix]chop\` - Chops some trees.

**Settings (only admins)**

\`$getServerVar[prefix]prefix\` - Changes the bot's prefix on the current server (default is hy!).}{color:#4fd0f7}}]

$c[\`$getServerVar[prefix]farm\` - Farms some food and items (farmlands needed).]
$c[\`$getServerVar[prefix]dungeon\` - Finds dungeons near your house.]
$c[\`$getServerVar[prefix]house\` - Buy and upgrade your house.]

$noMsgOnlyIf[$getVar[maintenance]==false||$getGlobaluserVar[isDev]==true;{execute:maintenanceError}]
`
}