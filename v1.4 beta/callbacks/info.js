module.exports = {
    name: "<@!$clientID>",
    aliases: ["<@900522120403124284>"],
    nonPrefixed: true,
    code: `
$title[1;Hello]
$description[1;Hi <@!$authorID>, my prefix is **$getServerVar[prefix]**. you can run **$getServerVar[prefix]help** for help.]
$footer[1;If you havent started you can do $getServerVar[prefix]start]
    `
}