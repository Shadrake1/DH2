export const Moves: { [k: string]: ModdedMoveData } = {
	multiheart: {
		num: 999,
						shortDesc: "Hits 1-7 times."
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Multi-Heart",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: [1, 7],
		secondary: {
			chance: 50,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Beautiful",
	},
	harpooning: {
		num: 998,
						shortDesc: "Prevents the target from switching out."
		accuracy: 75,
		basePower: 95,
		category: "Physical",
		isNonstandard: "Past",
		name: "Harpooning",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	harpoonstorm: {
		num: 997,
						shortDesc: "Lowers the user's attack by 2 stages after use."
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "Harpoon Storm",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		self: {
			boosts: {
				atk: -2,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Beautiful",
	},
	metalpipes: {
		num: 996,
						shortDesc: "30% chance to make the target flinch."
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Metal Pipes",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		type: "Steel",
		contestType: "Beautiful",
	},
	gaslight: {
		num: 996,
						shortDesc: "60% chance to confuse the target."
		accuracy: 85,
		basePower: 60,
		category: "Special",
		name: "Gaslight",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 60,
			volatileStatus: 'confusion',
		},
		type: "Poison",
		contestType: "Beautiful",
	},
	fbomb: {
		num: 995,
						shortDesc: "50% chance to lower the target's spdef by 2 stages."
		accuracy: 95,
		basePower: 60,
		category: "Special",
		name: "F-Bomb",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 50,
			boosts: {
				spdef: -2,
			},
			//chance: 50,
			//boosts: {
				//def: -2,
			//},
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Beautiful",
	},
	spidercooking: {
		num: 994,
						shortDesc: "30% chance to poison the target."
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Spider Cooking",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 30,
			volatileStatus: 'poison',
		},
		type: "Poison",
		contestType: "Beautiful",
	},
	timestop: {
		num: 993,
						shortDesc: "Freezes the target."
		accuracy: 50,
		basePower: 0,
		category: "Status",
		name: "Time Stop",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		status: 'frz',
		secondary: null,
		type: "Psychic",
		contestType: "Beautiful",
	},
	karaoke: {
		num: 992,
						shortDesc: "Raises the user's attack and special attack by 1; lowers enemy's attack."
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Karaoke",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, sound: 1, bypasssub: 1, metronome: 1},
		boosts: {
			atk: -1,
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
					atk: 1,
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Beautiful",
	},
	//time leap, switches out and attacks in future, cutting type (150 damage?)
	//Lucky Dice
}
