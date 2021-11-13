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

    //TODO: this is still a holdover from Kagegami High. SW2.0 Implementation needed
    function getAttribute(): number {
        return Math.round((RollD6() + RollD6()) / 2);
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
    let race: Race = getRace();
    let raceBackground: Background = getRaceBackground();

    document.querySelector("#athletics").textContent = "Race: " + race.name;
}