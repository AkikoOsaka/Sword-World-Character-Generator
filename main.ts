namespace kagegami {
    export interface Trait {
        name: string;
        text: string;
    }

    export interface Special {
        [id: number]: Trait;
    }

    export interface Table {
        [id: number]: any;
    }

    function getAttribute(): number {
        return Math.round((d6() + d6()) / 2);
    }

    function getTrait(): Trait {
        let roll: number = d66();
        let special: Special;
        let trait: Trait;
        while (special == null) {
            let id: string = <string>roll.toString();
            special = tableSpecial[id];
            if (special == null)
                roll -= 1;
        }
        roll = d6();
        while (trait == null) {
            let id: string = <string>roll.toString();
            trait = special[id];
            if (trait == null)
                roll -= 1;
        }
        return trait;
    }

    function getHobby(): string {
        let roll: number = d66();
        let hobby: string;
        while (hobby == null) {
            let id: string = <string>roll.toString();
            hobby = tableHobby[id];
            if (hobby == null)
                roll -= 1;
        }
        return hobby;
    }

    function getExplosion(): string {
        let roll: number = d66();
        let explosion: string;
        while (explosion == null) {
            let id: string = <string>roll.toString();
            explosion = tableExplosion[id];
            if (explosion == null)
                roll -= 1;
        }
        return explosion;
    }

    function getColor(): string {
        let roll: number = d66();
        let color: string;
        while (color == null) {
            let id: string = <string>roll.toString();
            color = tableColors[id];
            if (color == null)
                roll -= 1;
        }
        return color;
    }

    function getMotivation(): string {
        let roll: number = d66();
        let motivation: string;
        while (motivation == null) {
            let id: string = <string>roll.toString();
            motivation = tableMotivation[id];
            if (motivation == null)
                roll -= 1;
        }
        return motivation;
    }

    function d66(): number {
        return Math.floor((Math.random() * 56) + 11);
    }

    function d6(): number {
        return Math.floor((Math.random() * 6) + 1);
    }

    let athletics: number = getAttribute();
    let brains: number = getAttribute();
    let charm: number = getAttribute();
    let moxie: number = getAttribute();
    let weird: number = getAttribute();
    let stresslimit: number = moxie * 5;

    let trait1: Trait = getTrait();
    let trait2: Trait = getTrait();
    while (trait2 == trait1) {
        trait2 = getTrait();
    }

    let hobby: string = getHobby();
    let motivation: string =  getMotivation();
    let explosion: string =  getExplosion();
    let eyes: string = getColor();
    let hair: string = getColor();

    document.querySelector("#athletics").textContent = "Athletics: " + athletics.toString();
    document.querySelector("#brains").textContent = "Brains: " + brains.toString();
    document.querySelector("#charm").textContent = "Charm: " + charm.toString();
    document.querySelector("#moxie").textContent = "Moxie: " + moxie.toString();
    document.querySelector("#weird").textContent = "Weird: " + weird.toString();
    document.querySelector("#stresslimit").textContent = "Stress Limit: " + stresslimit.toString();

    document.querySelector("#traits").textContent = "Special Quality: " + trait1.name + ", " + trait2.name;
    document.querySelector("#hobby").textContent = "Hobby: " + hobby;
    document.querySelector("#motivation").textContent = "Character Motivation : " + motivation;
    document.querySelector("#explosion").textContent = "Stress Explosion: " + explosion;
    document.querySelector("#hair").textContent = "Hair Color: " + hair;
    document.querySelector("#eyes").textContent = "Eye Color: " + eyes;

    document.querySelector("#description").textContent = trait1.text + " " + trait2.text;



}