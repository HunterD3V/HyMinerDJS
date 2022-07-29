const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT); // Recive solicitations to make it online

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    mobile: false,
    token: process.env['TOKEN'],
    prefix: "$getServerVar[prefix]",
    intents: 'all',   
    database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./hyminer_database/",
    tables: ["main"],
    extraOptions: {
      dbType: "KeyValue",
    },
  }, 
     suppressAllErrors: true
});

bot.variables({ /* Colors vars (hex)
   ||||||||||||||||||
   \/\/\/\/\/\/\/\/\/
*/
    yellow: '#ffd86b',
    red: '#ad2f2f',
    blue: '#5ca3e6',
    enderPurpur: '#8e0be6',
    lightBlue: '#4fd0f7',
    green: '#72d656'
});


bot.variables({
    money: '0',
    bedrockNuggets: '0',
    cooldown_dragon_userID: '',
    clans: '',
    joinedClans: '',
    maintenance: "false",
    botVer: "v2.2r",
    level: '1',
    xp: '10',
    prefix: "mc!",
    isDev: "false",
    started: 'false',
    tools: 'wooden,wooden,wooden,wooden,wooden',
    inventory: '',
	inventoryBkp: '',
    armor: 'empty,empty,empty,empty',
    rbtMsg: '919440789661179934',
    enderdragonHP: '4500000000',
	userTime: '0',
	verifLvl: '0',
	compCap: 'false',
	captcha: '',
	banned: 'false',
	banTime: '0'
});

    
bot.status({
    text: "$getVar[prefix]help | $getVar[botVer]",
    type: "PLAYING", // types: PLAYING, LISTENING, WATCHING, COMPETING
    status: 'offline',
    time: 1
});

bot.onInteractionCreate();
bot.onChannelCreate();
bot.onMessage({
    guildOnly: false,
    respondOnEdit: {
        commands: true,
        alwaysExecute: false,
        nonPrefixed: false
    }
});
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'v2.4.x')

loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],

        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgCyan"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgGreen"]
    },
})

const hyminer = require('./hyminer.js');

const {Channel} = require('./node_modules/aoi.js/src/utils/helpers/functions.js');
const Interpreter = require("./node_modules/aoi.js/src/interpreter.js");
const { CheckCondition } = require('./node_modules/aoi.js/src/utils/helpers/checkCondition.js');
const { mustEscape } = require('./node_modules/aoi.js/src/utils/helpers/mustEscape.js');
const { Time } = require("./node_modules/aoi.js/src/utils/helpers/customParser.js");

bot.functionManager.createCustomFunction({
    name: '$noMsgOnlyIf',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);
        let error = false;

        const [condition, err = ''] = data.inside.splits;

        if (!eval(CheckCondition.solve(mustEscape(condition)))) {
            error = true;
            await d.util.errorParser(err, d);
        }        

        return {
            code: d.util.setCode(data),
            error,
        }
    }
}, {
    name: '$c',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$hyMiner',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        let code = data.inside.splits;
code = code.join(";");
        try {
            let res = eval(code.addBrackets());
            data.result = !res?"undefined":res;
        } catch (e) {
            data.result = "undefined";
        }

        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$js',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        let code = data.inside.splits;
code = code.join(";");
        try {
            let res = eval(code.addBrackets());
            data.result = typeof res === "object" || !res?JSON.stringify(res):res;
        } catch (e) {
            data.result = '`' + e + '`';
        }

        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$findElement',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        const [text, sample, sep = ' '] = data.inside.splits;

        const textArray = text.addBrackets().split(sep.addBrackets());
        
        textArray.forEach(t => {
            if (t.toLowerCase().includes(sample.toLowerCase().addBrackets())) {
                data.result = data.result!=undefined?data.result + sep + t:t;
            }
        });

        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$findElementByStart',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        const [text, sample, sep = ' '] = data.inside.splits;

        const textArray = text.addBrackets().split(sep.addBrackets());
        
        textArray.forEach(t => {
            if (t.toLowerCase().startsWith(sample.toLowerCase().addBrackets())) {
                data.result = data.result!=undefined?data.result + sep + t:t;
            }
        });

        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$findElementByStartOrdened',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        const [text, sample, sep = ' '] = data.inside.splits;

        const textArray = text.addBrackets().split(sep.addBrackets()).sort();
        
        textArray.forEach(t => {
            if (t.toLowerCase().startsWith(sample.toLowerCase().addBrackets())) {
                data.result = data.result!=undefined?data.result + sep + t:t;
            }
        });

        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$load',
    type: 'djs',
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        const [awaitData, ...awaits] = data.inside.splits;

        try {
            awaitData = JSON.parse(awaitData);
        } catch (e) {
            d.aoiError.fnError(d, 'custom', {inside: data.inside}, 'Invalid Data Provided In');
        }

        awaits.forEach(cmd => {
            if (!d.client.cmd.awaited.find(x => x.name.toLowerCase() === cmd.addBrackets().toLowerCase())) return d.aoiError.fnError(d, 'custom', {inside: data.inside}, "Awaited Command : " + cmd + " Not Found");
        });

        
        for (let cmd of awaits) {
            cmd = d.client.cmd.awaited.find(x => x.name.toLowerCase() === cmd.addBrackets().toLowerCase());

            d.interpreter(d.client, d.message, d.args, cmd, d.client.db, false, undefined, {awaitData,...d.data});
        }

    return {
        code: d.util.setCode(data),
    };
}
}, {
    name: '$loadOnlyIf',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);
        let error = false;

        let [condition, awaitData, ...awaits] = data.inside.splits;

        if (!eval(CheckCondition.solve(mustEscape(condition)))) {
            error = true;
            try {
                awaitData = JSON.parse(awaitData);
            } catch (e) {
                d.aoiError.fnError(d, 'custom', {inside: data.inside}, 'Invalid Data Provided In');
            }

            awaits.forEach(cmd => {
                if (!d.client.cmd.awaited.find(x => x.name.toLowerCase() === cmd.addBrackets().toLowerCase())) return d.aoiError.fnError(d, 'custom', {inside: data.inside}, "Awaited Command : " + cmd + " Not Found");
            });

            
            for (let cmd of awaits) {
                cmd = d.client.cmd.awaited.find(x => x.name.toLowerCase() === cmd.addBrackets().toLowerCase());

                d.interpreter(d.client, d.message, d.args, cmd, d.client.db, false, undefined, {awaitData,...d.data});
            }
            
        }

        return {
            code: d.util.setCode(data),
            error,
        }
        }
}, {
    name: "$test",
    type: 'djs',
    code: async d => {
        data = d.util.aoiFunc(d);
        
        let [awaited, option] = data.inside.splits;

        const cmd = d.client.cmd.awaited.find(x => x.name.toLowerCase() === await.addBrackets().toLowerCase());

        try {
            data.result = eval(`cmd?.${option}`);
        } catch {
            data.result = "";
        }
        return {
            code: d.util.setCode(data)
        }
    }
}, {
    name: '$codeChecker',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);

        let codeData = {};
        let code = data.inside.splits.join(";");

        let args = code.replace("/set", "").split(";")[0].split(',');
        args = args.map(x => x.trim());
        
        data.result = JSON.stringify(argsInfo);
        return {
            code: d.util.setCode(data)
        }
    }
});