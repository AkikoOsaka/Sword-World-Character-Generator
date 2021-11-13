namespace SwordWorld {
    let raceMax:number = 11;

    export interface Table {
        [id: number]: any;
    }    

    export interface Feat {
        name: string;
        text: string;
    }
    export interface FeatTable {
        [id: number]: Feat;
    }

    //Race Stuff
    export interface Background {
        name: string;
        startingClass: string;
        skill: number;
        body: number;
        mind: number;
        exp: number;
    }
    export interface BackgroundTable {
        [id: number]: Background;
    }
    export interface BackgroundTables {
        [id: number]: BackgroundTable;
    }
    export interface Race {
        name: string;
        raceAbilities: FeatTable;
        backgroundTables: BackgroundTables;
        language: string;
        classRestriction: string;
        statA: string;
        statB: string;
        statC: string;
        statD: string;
        statE: string;
        statF: string;
    }  
    // Classes Object
    // This is where all the class levels the character has are listed.
    // This should make it easier to get a hold of how much MP a character has.
    // For now, its gonna be pretty stupid and lonely with maybe 1 or 2 levels in something but, idk, its gonna be useful later
    export interface Classes {
        Fighter: number;
        Fencer: number;
        Grappler: number;
        Marksman: number;
        Sorcerer: number;
        Conjurer: number;
        Priest: number;
        Artificer: number;
        FairyTamer: number;
        Scout: number;
        Sage: number;
        Ranger: number;
        Enhancer: number;
        Bard: number;
        Rider: number;
        Alchemist: number;
        Warlord: number;
        Mystic: number;
        DemonRuler: number;
        Arcanist: number;
        Artisan: number;
        Aristocrat: number;
        PhysicalMaster: number;
    }
    //Items
    export interface Weapon {
        name: string,
        type: string,
        stance: string,
        strReq: number,
        acc: number,
        power: number,
        cRate: number,
        price: number
    }
    export interface item {
        name: string,
        cost: number
    }
    export interface accessories {
        name: string,
        slot: string,
        price: number
    }
    export interface armor {
        name: string,
        strReq: number,
        evasion: number,
        defense: number,
        price: number
    }
    export interface potion {
        name: string,
        power: number,
        price: number
    }
    //Character Sheet Stuff
    let race: Race;
    let raceBackground: Background;
    let statA: number;
    let dexterity: number;
    let dexMod: number;
    let statB: number;
    let agility: number;
    let agiMod: number;
    let statC: number;
    let strength: number;
    let strMod: number;
    let statD: number;
    let vitality: number;
    let vitMod: number;
    let statE: number;
    let intelligence: number;
    let intMod: number;
    let statF: number;
    let spirit: number;
    let spiMod: number;
    let fortitude: number;
    let willpower: number;
    let classLevels: Classes = {
        Fighter: 0,
        Fencer: 0,
        Grappler: 0,
        Marksman: 0,
        Sorcerer: 0,
        Conjurer: 0,
        Priest: 0,
        Artificer: 0,
        FairyTamer: 0,
        Scout: 0,
        Sage: 0,
        Ranger: 0,
        Enhancer: 0,
        Bard: 0,
        Rider: 0,
        Alchemist: 0,
        Warlord: 0,
        Mystic: 0,
        DemonRuler: 0,
        Arcanist: 0,
        Artisan: 0,
        Aristocrat: 0,
        PhysicalMaster: 0,
    }
    function getRace(): Race {
        let roll: number = Math.floor((Math.random() * raceMax) + 1);
        let race: Race = Races[roll]
        return race;
    }
    function getRaceBackground():Background {
        let backgroundTables: BackgroundTables = race["backgroundTables"];
        let BackgroundTable: BackgroundTable = backgroundTables[Roll1D2()];

        return BackgroundTable[Roll2D6()];
    }

    function getAttribute (AbilityScore: string): number {
        let value:number;
        switch (AbilityScore) {
            case "1d":
                value = RollD6();
                break;
            case "1d+6":
                value = (RollD6())+6;
                break;
            case "2d":
                value = (RollD6() + RollD6());
                break;
            case "2d+6":
                value = (RollD6() + RollD6())+6;
                break;
        }
        return value;
    }
    function getAttributes(): void {
        statA = getAttribute(race.statA);
        statB = getAttribute(race.statB);
        statC = getAttribute(race.statC);
        statD = getAttribute(race.statD);
        statE = getAttribute(race.statE);
        statF = getAttribute(race.statF);
        dexterity = statA + raceBackground.skill;
        agility = statB + raceBackground.skill;
        strength = statC + raceBackground.body;
        vitality = statD + raceBackground.body;
        intelligence = statE + raceBackground.mind;
        spirit = statF + raceBackground.mind;
    }
    function getModifier(AbilityScore:number): number {
        return Math.floor(AbilityScore/6);
    }
    function getModifiers(): void {
        dexMod = getModifier(dexterity);
        agiMod = getModifier(dexterity);
        strMod = getModifier(strength);
        vitMod = getModifier(vitality);
        intMod = getModifier(intelligence);
        spiMod = getModifier(spirit);
    }
    function RollD66(): number {
        return Math.floor((Math.random() * 56) + 11);
    }

    function RollD6(): number {
        return Math.floor((Math.random() * 6) + 1);
    }
    function Roll2D6(): number {
        return (RollD6() + RollD6());
    }
    function Roll1D2(): number {
        return Math.floor((Math.random() * 2) + 1);
    }
    race = getRace();
    raceBackground = getRaceBackground();
    getAttributes();
    getModifiers();

    document.querySelector("#Race").textContent = "Race: " + race.name;
    document.querySelector("#Background").textContent = "Background: " + raceBackground.name;
    document.querySelector("#Skill").textContent = "Skill: " + raceBackground.skill;
    document.querySelector("#Body").textContent = "Body: " + raceBackground.body;
    document.querySelector("#Mind").textContent = "Mind: " + raceBackground.mind;
    document.querySelector("#StatA").textContent = "A: " + statA;
    document.querySelector("#StatB").textContent = "B: " + statB;
    document.querySelector("#StatC").textContent = "C: " + statC;
    document.querySelector("#StatD").textContent = "D: " + statD;
    document.querySelector("#StatE").textContent = "E: " + statE;
    document.querySelector("#StatF").textContent = "F: " + statF;
    document.querySelector("#Dex").textContent = "Dexterity: " + dexterity;
    document.querySelector("#Agi").textContent = "Agility: " + agility;
    document.querySelector("#Str").textContent = "Strength: " + strength;
    document.querySelector("#Vit").textContent = "Vitality: " + vitality;
    document.querySelector("#Int").textContent = "Intelligence: " + intelligence;
    document.querySelector("#Spi").textContent = "Spirit: " + spirit;
    document.querySelector("#DexMod").textContent = "Dexterity Modifier: " + dexMod;
    document.querySelector("#AgiMod").textContent = "Agility Modifier: " + agiMod;
    document.querySelector("#StrMod").textContent = "Strength Modifier: " + strMod;
    document.querySelector("#VitMod").textContent = "Vitality Modifier: " + vitMod;
    document.querySelector("#IntMod").textContent = "Intelligence Modifier: " + intMod;
    document.querySelector("#SpiMod").textContent = "Spirit Modifier: " + spiMod;
}