module.exports = [{
	name: 'hyminer-leatherArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: `a`
},{
	name: 'hyminer-ironArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: `a`
},{
	name: 'hyminer-goldenArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: `a`
},{
	name: 'hyminer-diamondArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: `a`
},{
	name: 'hyminer-netheriteArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: `a`
},{
	name: 'hyminer-rubyArmor-shop',
	type: 'interaction',
	prototype: 'button',
	code: ``
},

// ARMORS MAPPING  ||  ||  ||  ||  ||
// RIGHT DOWN HERE \/  \/  \/  \/  \/
		  
{
    type: 'awaited',
    name: 'mapArmors',
    code: `
$customEmoji[money] $**$abbreviate[$hyMiner[hyminer.armors.$toLowercase[$get[data].$message[1]]];2]** | $customEmoji[$tolowercase[$get[pldata]_$get[data]]] $toLocaleUpperCase[$get[data] $message[1]]

$let[pldata;$if[$stringEndsWith[$message[1];s]==false;$message[1]s;$message[1]]]
$let[data;$getCacheData[Group;cache;mapArmorsData]]`
}]