var SwordWorld;
(function (SwordWorld) {
    let raceMax = 11;
    //Character Sheet Stuff
    let race;
    let raceBackground;
    let statA;
    let dexterity;
    let dexMod;
    let statB;
    let agility;
    let agiMod;
    let statC;
    let strength;
    let strMod;
    let statD;
    let vitality;
    let vitMod;
    let statE;
    let intelligence;
    let intMod;
    let statF;
    let spirit;
    let spiMod;
    let fortitude;
    let willpower;
    let classLevels = {
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
    };
    function getRace() {
        let roll = Math.floor((Math.random() * raceMax) + 1);
        let race = SwordWorld.Races[roll];
        return race;
    }
    function getRaceBackground() {
        let backgroundTables = race["backgroundTables"];
        let BackgroundTable = backgroundTables[Roll1D2()];
        return BackgroundTable[Roll2D6()];
    }
    function getAttribute(AbilityScore) {
        let value;
        switch (AbilityScore) {
            case "1d":
                value = RollD6();
                break;
            case "1d+6":
                value = (RollD6()) + 6;
                break;
            case "2d":
                value = (RollD6() + RollD6());
                break;
            case "2d+6":
                value = (RollD6() + RollD6()) + 6;
                break;
        }
        return value;
    }
    function getAttributes() {
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
    function getModifier(AbilityScore) {
        return Math.floor(AbilityScore / 6);
    }
    function getModifiers() {
        dexMod = getModifier(dexterity);
        agiMod = getModifier(dexterity);
        strMod = getModifier(strength);
        vitMod = getModifier(vitality);
        intMod = getModifier(intelligence);
        spiMod = getModifier(spirit);
    }
    function RollD66() {
        return Math.floor((Math.random() * 56) + 11);
    }
    function RollD6() {
        return Math.floor((Math.random() * 6) + 1);
    }
    function Roll2D6() {
        return (RollD6() + RollD6());
    }
    function Roll1D2() {
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
})(SwordWorld || (SwordWorld = {}));
//# sourceMappingURL=main.js.map