// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	///////////////////////////////////////////////////////////////
	///////////////////// Vtubers Only ////////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Vtubers Only",
		column: 1,
		// name: "vtubersonly",
	},
	{
		name: "Singles",
		desc: 'vtubers only',
		mod: 'vtubers',
		ruleset: [
		'Standard', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	}, // <- Added missing closing brace and comma here
	{
		name: "Doubles",
		desc: 'vtubers only',
		gameType: 'doubles',
		mod: 'vtubers',
		ruleset: [
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	}, // <- Added missing cl
	{
		name: "Multi Battle",
		desc: 'vtubers only',
		gameType: 'multi',
		mod: 'vtubers',
		ruleset: [
		'Max Team Size = 4',
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod']
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	},
	{
		name: "Multi Random Battle",
		desc: 'vtubers only',
		gameType: 'multi',
		team: 'random',
		mod: 'vtubers',
		ruleset: [
		'Max Team Size = 4',
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	},
	{
		name: "Free For All",
		desc: 'vtubers only',
		mod: 'vtubers',
		gameType: 'freeforall',
		ruleset: [
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	}, 
	{
		name: "Random Free For All",
		desc: 'vtubers only',
		mod: 'vtubers',
		team: 'random',
		gameType: 'freeforall',
		ruleset: [
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod'
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	}, 
	///////////////////////////////////////////////////////////////
	///////////////////// Vtubers + Pokemon ////////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Vtubers + Pokemon",
		column: 2,
		// name: "vtuberspluspokemon",
	},
	{
		name: "Placeholder",
		desc: 'vtubers plus pokemon',
		mod: 'vtubers',
		gameType: 'freeforall',
		ruleset: [
		'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Terastal Clause', 'Data Mod', 'Sleep Clause Mod', 'Species Clause', 'Evasion Clause'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Vtuber'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not in Vtubers.'];
				}
			}
		}
	}, 
	///////////////////////////////////////////////////////////////
	///////////////////// Miscellaneous ///////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Miscellaneous",
		column: 3,
		// name: "gen9petmods",
	},
	{
		name: "[Gen 9] Alternatium EX",
		desc: `<b>Alternatium EX</b>: A metagame made up of only Pokemon with alternate forms exist, with all of them being seperate and unique Pokemon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/alternatium-ex-slate-1-starter-pack.3701560/">Alternatium EX on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1bvvkPg1CrUBJFJJeuwkts8elfJcEcahGOoHm-vGBXOI/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'alternatiumex',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Min Source Gen = 3', 'Terastal Clause'],
		banlist: ['All Pokemon', 'Baton Pass'],
		unbanlist: [
				'Raichu', 'Raichu-Soft', 'Rapidash', 'Rapidash-Galar', 'Golem-Berserker', 'Golem-Alola',
				'Cherrim', 'Cherrine', 'Minior', 'Minior-Meteor', 'Eevee', 'Eevee-Starter',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (speciesTable[template.id]) {
					return ["You are limited to one of each Pokémon by Species Clause (except for different formes). ", "You have more than one " + template.id + "."];
				}
				speciesTable[template.id] = true;
			}
		},
	},
];
	// End
	
	//placeholder
	//{
		//name: "Vtubers + Pokemon",
		//mod: 'vtubers',
		//desc: `vtubers and pokemon`,
		//ruleset: ['Standard', 'Data Mod'],
		//teambuilderFormat: 'National Dex', //uncomment if your mod is natdex
		//onValidateTeam(team, format) {
			//let speciesTable = {};
			//let allowedTiers = [''];
			//for (const set of team) {
				//let template = this.dex.species.get(set.species);
				//if (!allowedTiers.includes(template.tier)) {
					//return [set.species + ' is not legal in the format.'];
				//}
			//}
		//},
	//},
