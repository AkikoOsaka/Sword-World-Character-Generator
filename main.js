var kagegami;
(function (kagegami) {
    function getAttribute() {
        return Math.round((d6() + d6()) / 2);
    }
    function getTrait() {
        let roll = d66();
        let special;
        let trait;
        while (special == null) {
            let id = roll.toString();
            special = kagegami.tableSpecial[id];
            if (special == null)
                roll -= 1;
        }
        roll = d6();
        while (trait == null) {
            let id = roll.toString();
            trait = special[id];
            if (trait == null)
                roll -= 1;
        }
        return trait;
    }
    function getHobby() {
        let roll = d66();
        let hobby;
        while (hobby == null) {
            let id = roll.toString();
            hobby = kagegami.tableHobby[id];
            if (hobby == null)
                roll -= 1;
        }
        return hobby;
    }
    function getExplosion() {
        let roll = d66();
        let explosion;
        while (explosion == null) {
            let id = roll.toString();
            explosion = kagegami.tableExplosion[id];
            if (explosion == null)
                roll -= 1;
        }
        return explosion;
    }
    function getColor() {
        let roll = d66();
        let color;
        while (color == null) {
            let id = roll.toString();
            color = kagegami.tableColors[id];
            if (color == null)
                roll -= 1;
        }
        return color;
    }
    function getMotivation() {
        let roll = d66();
        let motivation;
        while (motivation == null) {
            let id = roll.toString();
            motivation = kagegami.tableMotivation[id];
            if (motivation == null)
                roll -= 1;
        }
        return motivation;
    }
    function d66() {
        return Math.floor((Math.random() * 56) + 11);
    }
    function d6() {
        return Math.floor((Math.random() * 6) + 1);
    }
    let athletics = getAttribute();
    let brains = getAttribute();
    let charm = getAttribute();
    let moxie = getAttribute();
    let weird = getAttribute();
    let stresslimit = moxie * 5;
    let trait1 = getTrait();
    let trait2 = getTrait();
    while (trait2 == trait1) {
        trait2 = getTrait();
    }
    let hobby = getHobby();
    let motivation = getMotivation();
    let explosion = getExplosion();
    let eyes = getColor();
    let hair = getColor();
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
})(kagegami || (kagegami = {}));
//# sourceMappingURL=main.js.map