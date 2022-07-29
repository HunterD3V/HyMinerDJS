/*module.exports = {
    type: "loop",
    code: `
$if[$ping<150;
$editMessage[915975381260070963;** **{newEmbed:{title:Actual Status#COLON#}{description:Ping#COLON# **$pingms**\nUptime#COLON# **$uptime[humanize]**}{color:00FF00}};913144827351273534]
;
$if[$ping<300;
$editMessage[915975381260070963;** **{newEmbed:{title:Actual Status#COLON#}{description:Ping#COLON# **$pingms**\nUptime#COLON# **$uptime[humanize]**}{color:FFFF00}};913144827351273534]
;
$editMessage[915975381260070963;** **{newEmbed:{title:Actual Status#COLON#}{description:Ping#COLON# **$pingms**\nUptime#COLON# **$uptime[humanize]**}{color:FF0000}};913144827351273534]
]]

    `,
    channel: "913144827351273534",
    executeOnStartup: true,
    every: 35000

} 