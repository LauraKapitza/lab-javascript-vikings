// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length); //creating random number for Saxon arr
        let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length); //creating random number for viking arr
        
        let saxon = this.saxonArmy[randomNumSaxon]; //choosing random saxon
        let viking = this.vikingArmy[randomNumViking]; //choosing random viking

        saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.slice[this.saxonArmy.indexxOf["saxon"], 1]
        }
    }
    saxonAttack() {
        let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length) //creating random number for Saxon arr
        let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length) //creating random number for viking arr
        
        this.vikingArmy[randomNumViking].receiveDamage(this.saxonArmy[randomNumSaxon].strength);
    }
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
