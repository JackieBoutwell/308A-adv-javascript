//Part 1

// const adventurer = {
// 	name: 'Robin',
// 	health: 10,
// 	inventory: ['sword', 'potion', 'artifact'],
// 	companion: {
// 		name: 'Leo',
// 		type: 'Cat',
// 	},
// 	roll(mod = 0) {
// 		const result =
// 			Math.floor(Math.random() * 20) + 1 + mod;
// 		console.log(
// 			`${this.name} rolled a ${result}.`
// 		);
// 	},
// };

// const flea = {
// 	name: 'Frank',
// 	type: 'flea',
// 	belongings: ['small hat', 'sunglasses'],
// };

// adventurer.companion.companion = flea;

// adventurer.roll();
// console.log(adventurer);

//Part 2
// class Character {
// 	constructor(name) {
// 		this.name = name;
// 		this.inventory = [];
// 	}
// 	static MAX_HEALTH = 100;
// 	roll(mod = 0) {
// 		const result =
// 			Math.floor(Math.random() * 20) + 1 + mod;
// 		console.log(
// 			`${this.name} rolled a ${result}.`
// 		);
// 	}
// }

// const robin = new Character('Robin');
// robin.inventory = ['sword', 'potion', 'artifact'];
// robin.companion = new Character('Leo');
// robin.companion.type = 'Cat';
// robin.companion.companion = new Character(
// 	'Frank'
// );
// robin.companion.companion.type = 'Flea';
// robin.companion.companion.inventory = [
// 	'small hat',
// 	'sunglasses',
// ];

//Part 3
// checkRole() {
//        if(this.ROLES.includes(role)){
//        this.ROLES = role;
//    }};
class Character {
	constructor(name) {
		this.name = name;
		this.inventory = [];
	}
	static MAX_HEALTH = 100;
	static roll(mod = 0) {
		const result =
			Math.floor(Math.random() * 20) + 1 + mod;
		console.log(
			`${this.name} rolled a ${result}.`
		);
        return result;
	}
}

class Adventurer extends Character {
	static ROLES = ['Fighter', 'Healer', 'Wizard'];
	constructor(name, role) {
		super(name);
		if (Adventurer.ROLES.includes(role)) {
			this.role = role;
		}
		this.inventory.push(
			'bedroll',
			'50 gold coins'
		);
	}
	scout() {
		console.log(
			`${this.name} is scouting ahead...`
		);
		super.roll();
	}
	duel(opponent) {
        let health1 = this.constructor.MAX_HEALTH;
        let health2 = opponent.MAX_HEALTH
        while (health1 > 50 && health2 > 50) {
            let roll1 = this.constructor.roll();
            let roll2 = opponent.roll();
			if (roll1 > roll2) {
                health2 -= 1;
			} else if (roll2 > roll1) {
				health1 -= 1;
			} else {
                console.log("It's a tie")
            }
			console.log(` ${this.name}'s health: ${health1}`);
			console.log(`${opponent.name}'s health: ${health2}`);
		}
		if (health1 > 50) {
			console.log(`${this.name} wins the duel!`);
		} else {
			console.log(`${opponent.name} wins the duel!`);
		}

    }
}

class Companion extends Character {
	constructor(name, type) {
		super(name);
		this.type = type;
	}
}

const robin = new Adventurer('Robin', 'Fighter');

const leo = new Companion('Leo', 'Cat');

const frank = new Companion('Frank', 'Flea');

frank.inventory.push('small hat', 'sunglasses');

leo.companion = frank;
robin.companion = leo;
console.log('ROBIN', robin);

class AdventurerFactory {
	constructor(role) {
		this.role = role;
		this.adventurers = [];
	}
	generate(name) {
		const newAdventurer = new Adventurer(
			name,
			this.role
		);
		this.adventurers.push(newAdventurer);
	}
	findByIndex(index) {
		return this.adventurers[index];
	}
	findByName(name) {
		return this.adventurers.find(
			(a) => a.name === name
		);
	}
}

const osito = new Adventurer("Osito", "Healer")
const healers = new AdventurerFactory('Healer');
healers.generate('Osito');
console.log('HEALERS', healers);
console.log('OSITO', osito);


const kupa = new Adventurer("Kupa", "Fighter")

robin.duel(Adventurer)

console.log(robin.constructor.MAX_HEALTH)
