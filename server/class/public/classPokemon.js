class Pokemon {

    constructor(name, health, attack, defend, typeAttack, speed, firstA, secondA, ultimateA, block) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defend = defend;
        this.typeAttack = typeAttack;
        this.speed = speed;
        this.firstA = firstA;
        this.secondA = secondA;
        this.ultimateA = ultimateA;
        this.block = block;

    }

    autoAttack(damage) {
        this.health = this.health - damage;
        return this.health;
    }
}

class IcePokemon extends Pokemon {

    mainAttack(damage) {
        this.health = this.health - damage;
        return this.health;
    }
}

class GroundPokemon extends Pokemon {

    mainAttack(damage) {
        this.health = this.health - damage;
        return this.health;
    }
}

module.exports = { IcePokemon, GroundPokemon };