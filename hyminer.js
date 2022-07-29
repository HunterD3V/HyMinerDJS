let stuff = {
    items: {
        stone_block: '2',
	granite: '3',
	diorite: '3',
	andesite: '3',
	calcite: '4',
	deepslate: '2',
	dripstone_block: '4',
	obsidian: '10',
	sapphire: '15',
	arkenium_ore: '21',
	aether_icestone: '6',
	divine_carved_stone: '5',
	ruby: '12',
	dirt_block: '1',
	grass_block: '2',
	coarse_dirt: '2',
	aetherium_ingot: '70',
	amethyst: '17',
	sand: '3',
	soul_sand: '5',
	snow_block: '20',
	snow_ball: '10',
        oak_wood: '2',
	birch_wood: '4',
	acacia_wood: '8',
	spruce_wood: '10',
	mangroove_wood: '6',
	crimson_stem: '8',
	warped_stem: '8',
	therawood: '10',
	amberoot: '12',
	aether_grass: '13',
	aether_dirt: '10',
	golden_amber: '19',
        bone: '4',
        arrow: '6',
        gunpowder: '8',
        string: '3',
	phantom_membrane: '5',
	sponge_block: '6',
	white_essence: '7',
	ender_essence: '7',
	legendary_essence: '11',
	
        rotten_flesh: '2',
        coal: '6',
	ender_pearl: '7',
        raw_copper: '4',
        raw_iron: '5',
        raw_gold: '7',
        diamond: '175',
	prism: '270',
        cobblestone: '1',
	topaz_ingot: '14',
	netherrack: '4',
	magma_block: '7',
	ancient_debris: '250',
	glowstone: '9',
       shulker_shell: '130'
    },
	
    tools: {
        pickaxes: {
            stone: '10000',
            iron: '37000',
            golden: '190000',
	    amethyst: '320000',
	    prism: '1240000',
            diamond: '1940000',
	    molten: '795000',
            netherite: '7000000'
        },
        axes: {
            stone: '8000',
            iron: '36000',
            golden: '160000',
	    amethyst: '210000',
	    great: '420000',
            diamond: '1270000',
	    prism: '1650000',
            netherite: '2500000',
        },
        swords: {
            stone: '6000',
            iron: '64000',
            golden: '104000',
	    ice: '208000',
	    amethyst: '160000',
            diamond: '124000',
	    prism: '230000',
            netherite: '4000000',
	    greatium: '1100000',
	    dragon: '13672000'
        },
        shovels: {
            stone: '15000',
            iron: '80000',
            golden: '170000',
	    amethyst: '210000',
	    ruby: '380000',
            diamond: '1480000',
	    prism: '1260000',
            netherite: '5500000'
        },
        hoes: {
            stone: '6000',
            iron: '16000',
            golden: '24000',
            diamond: '80000',
            netherite: '256000',
	    amethyst: '160000',
	    prism: '208000'
        },
	/*
        },
        shield: {
            iron: '-1',
            golden: '-1',
            diamond: '-1',
            netherite: '-1'
        },
        */

    },
    armors: {
        types: ['helmet','chestplate','leggings','boots'],
        leather: {
            helmet: '20000',
            chestplate: '80000',
            leggings: '60000',
            boots: '30000'
        },
        iron: {
            helmet: '160000',
            chestplate: '32000',
            leggings: '27200',
            boots: '147200'
        },
        golden: {
            helmet: '130000',
            chestplate: '216000',
            leggings: '172000',
            boots: '80200'
        },
        diamond: {
            helmet: '920000',
            chestplate: '750000',
            leggings: '310000',
            boots: '416000'
        },
        netherite: {
            helmet: '1760000',
            chestplate: '2601000',
            leggings: '219460',
            boots: '114600'
        },
	ruby: {
	    helmet: '1760500',
	    chestplate: '2650000',
	    leggings: '438750',
	    boots: '229200'
	}
    }
}

for (let tools in stuff.tools) {
	let values = stuff.tools[tools];
	let types = Object.keys(values)
	stuff.tools[tools].types = types;
}

stuff.items.all = Object.keys(stuff.items)

console.log(stuff.tools)

module.exports = stuff