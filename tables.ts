namespace SwordWorld {

    export let HumanBackgrounds : BackgroundTables = {
        1: BackgroundHuman,
        2: BackgroundUpdatedHuman,
    }
    export let ElfBackgrounds : BackgroundTables = {
        1: BackgroundElf,
        2: BackgroundUpdatedElf,
    }
    export let DwarfBackgrounds : BackgroundTables = {
        1: BackgroundDwarf,
        2: BackgroundUpdatedDwarf,
    }    
    export let TabbitBackgrounds : BackgroundTables = {
        1: BackgroundTabbit,
        2: BackgroundUpdatedTabbit,
    }   
    export let RunefolkBackgrounds : BackgroundTables = {
        1: BackgroundRunefolk,
        2: BackgroundUpdatedRunefolk,
    }    
    export let NightmareBackgrounds : BackgroundTables = {
        1: BackgroundNightmare,
        2: BackgroundUpdatedNightmare,
    }    
    export let ShadowBackgrounds : BackgroundTables = {
        1: BackgroundShadow,
        2: BackgroundUpdatedShadow,
    }
    export let LildrakenBackgrounds : BackgroundTables = {
        1: BackgroundLildraken,
        2: BackgroundLildraken,
    }   
    export let GrassrunnerBackgrounds : BackgroundTables = {
        1: BackgroundGrassrunner,
        2: BackgroundGrassrunner,
    }    
    export let NewmanBackgrounds : BackgroundTables = {
        1: BackgroundNewman,
        2: BackgroundNewman,
    }    
    export let ValkyrieBackgrounds : BackgroundTables = {
        1: BackgroundValkyrie,
        2: BackgroundValkyrie,
    }
    export let Human : Race = {
        name: "Human",
        raceAbilities: {
            1: {
                name: "Sword's Salvation/Change Fate",
                text: "Once per day on any Skill Check, Damage Calculation, or Loot Determination, switch the face on the rolled 2d to the opposite side. A die roll of [1] becomes [6], [2] becomes [5], and [3] becomes [4]. Conversely, this might also switch the result to a lower number, but both dice must be switched, the player cannot switch only one die. For example, if a roll results in a [1] and [4] on 2d, and the player uses [Sword's Salvation/Change Fate], the dice become [6] and [3]. If an Automatic Failure (double [1]'s) occurs, it can be changed to an Automatic Success (double [6]'s). ",
            },
        },
        backgroundTables: HumanBackgrounds,
        language: "Humans can speak, read and write Trade Common and a Regional Dialect.",
        classRestriction: "None",
    };
    export let Elf : Race = {
        name: "Elf",
        raceAbilities: {
            1: {
                name: "Darkvision",
                text: "Elves can see in the darkness as well as they can during daytime.",
            },
            2: {
                name: "Sword's Salvation/Gentle Water",
                text: "Elves can move as freely underwater as on land. Also while underwater, they can hold their breath for one hour (outside of water their breathing rate is the same as other races). After spending 1 hour submerged, they must spend one minute breathing normally. Elves can also speak normally while underwater. ",
            },
        },
        backgroundTables: ElfBackgrounds,
        language: "Elves can speak, read and write Elvish and Trade Common.",
        classRestriction: "None",
    };
    export let Dwarf : Race = {
        name: "Dwarf",
        raceAbilities: {
            1: {
                name: "Darkvision",
                text: "Dwarves can see in the darkness as well as they can during daytime.",
            },
            2: {
                name: "Sword's Salvation/Flame Body",
                text: "Dwarves cannot be injured by fire attacks or magic, and receive no damage from fire-based effects or spells. They also cannot be burned or hurt by flames. ",
            },
        },
        backgroundTables: DwarfBackgrounds,
        language: "Dwarves can speak, read and write Dwarven and Trade Common.",
        classRestriction: "None",
    };
    export let Tabbit : Race = {
        name: "Tabbit",
        raceAbilities: {
            1: {
                name: "Sixth Sense",
                text: "The ability to sense danger. You may make Danger Sense checks using your Adventurer Level instead of any Scout or Ranger levels. ",
            },
        },
        backgroundTables: ElfBackgrounds,
        language: "Tabbits can read Ancient Celestial, and can speak, read and write Trade Common.",
        classRestriction: "Priest",
    };
    export let Runefolk : Race = {
        name: "Runefolk",
        raceAbilities: {
            1: {
                name: "Darkvision",
                text: "Runefolk can see in the darkness as well as they can during daytime.",
            },
            2: {
                name: "HP Conversion",
                text: "In exchange for reducing their HP by any amount, the Runefolk can recover that same number of MP. The conversion requires 10 seconds (1 round), and can only be used once a day. ",
            },
        },
        backgroundTables: RunefolkBackgrounds,
        language: "Runefolk can speak, read and write Magitech and Trade Common.",
        classRestriction: "Fairy Tamer, Priest ",
    };
    export let Nightmare : Race = {
        name: "Nightmare",
        raceAbilities: {
            1: {
                name: "Alternate Form",
                text: "As a Minor Action, a Nightmare can instantaneously change to a unique form an unlimited number of times per day. Their horns increase in size and their skin turns pure white, they receive no penalty for using magic while wearing armor (p.126), and can cast spells without using the required verbal and somatic components (implements and others are still required). It takes a Nightmare 10 seconds (1 round) to revert to their humanoid form once transformed.",
            },
            2: {
                name: "Weakness",
                text: "Nightmares take +2 extra points of damage from silver weapons and from certain elemental attacks determined by their race of origin: Human: Earth Vulnerability, Elf: Water/Ice Vulnerability, Dwarf: Fire Vulnerability, Lildraken: Wind Vulnerability",
            },
            3: {
                name: "Soulscar",
                text: "Nightmares begin play with one soulscar.",
            },
        },
        backgroundTables: NightmareBackgrounds,
        language: "Nightmare PCs have the same starting languages as the race they are born to.",
        classRestriction: "None",
    };
    export let Shadow : Race = {
        name: "Shadow",
        raceAbilities: {
            1: {
                name: "Darkvision",
                text: "Shadows can see in the darkness as well as they can during daytime.",
            },
            2: {
                name: "Moonlight's Protection",
                text: "+4 to Willpower. ",
            },
        },
        backgroundTables: ShadowBackgrounds,
        language: "Shadows can speak, read and write Shadow and Trade Common.",
        classRestriction: "None",
    };
    export let Lildraken : Race = {
        name: "Lildraken",
        raceAbilities: {
            1: {
                name: "Scaly Hide",
                text: "Lildraken receive +1 Defense.",
            },
            2: {
                name: "Tail Whip",
                text: "Lildraken may use the Wrestling weapon Tail, regardless of class.",
            },
            3: {
                name: "Sword's Salvation/Wings of the Wind",
                text: "A Lildraken may spread their wings and take flight, flying for a total of 6 rounds each day. These rounds do not have to be consecutive. Movement speed remains the same whether moving forward or ascending, but doubles when descending. While flying, a Lildraken receives a +1 bonus to both Accuracy and Evasion. In addition, they may carry additional weight, up to a maximum of 200 kg. This may be equipment, supplies, or another PC. ",
            },
        },
        backgroundTables: LildrakenBackgrounds,
        language: "Lildraken can speak, read and write Dragonic and Trade Common.",
        classRestriction: "None",
    };
    export let Grassrunner : Race = {
        name: "Grassrunner",
        raceAbilities: {
            1: {
                name: "Mana Interference",
                text: "Grassrunners do not have and cannot gain MP, even if a class or ability would otherwise do so. Mako Stones may still be used. If a Grassrunner succeeds on a Willpower check against a spell, they will be completely unaffected (even if the spell says otherwise).",
            },
            2: {
                name: "Natural Communication",
                text: "Grassrunners are able to understand plants and animals to a small degree. While this does not mean a full conversation can be held, the Grassrunner can pick up on subtle expressions, such as if there is danger ahead, or if there's something wrong in the environment. ",
            },
        },
        backgroundTables: GrassrunnerBackgrounds,
        language: "Grassrunners can speak, read and write Grassrunner and Trade Common.",
        classRestriction: "None",
    };
    export let Newman : Race = {
        name: "Newman",
        raceAbilities: {
            1: {
                name: "Déjà Vu",
                text: "Once per day, a Newman can call upon memories of previous lives, and receive a +2 bonus to an Intelligence-based skill check. This ability must be declared before the roll is made, and cannot be applied to a Spellcasting check. ",
            },
            2: {
                name: "Child of Magic",
                text: "Increase all Magic Power by +1. Additionally, if a Spellcasting check is automatically successful (i.e. the roll is double 6's), no MP is spent. This applies even if the MP would come from a Mako Stone or Familiar. Multiple simultaneous MP expenditures, such as through the Combat Feat 《Metamagic/Targets》, can only have one of the MP expenditures become 0. ",
            },
        },
        backgroundTables: NewmanBackgrounds,
        language: "Newmen can speak, read and write Arcana and Trade Common.",
        classRestriction: "None",
    };
    export let Valkyrie : Race = {
        name: "Valkyrie",
        raceAbilities: {
            1: {
                name: "Light Wings of the War-Maiden",
                text: "If the Valkyrie would fall from any significant height, they can create a set of wings made out of light in order to slow their fall. So long as they're conscious, they can fall from any height and land without taking fall damage or falling prone. They can't move freely in the air as though they were flying, but they can hold on to other characters and equipment up to a maximum weight of 200 kg.",
            },
            2: {
                name: "Blessing of the War-Maiden",
                text: "Offers a blessing to a character in the same area, other than the Valkyrie or any mount the Valkyrie may be using. Once per day, as a Minor Action, the Valkyrie can give any target a +2 bonus to Fortitude and Willpower for 3 minutes (18 rounds). This effect only works on Humanoids, Animals, and Mythical Beasts. ",
            },
        },
        backgroundTables: ValkyrieBackgrounds,
        language: "Valkyries can speak, read and write Trade Common and a Regional Dialect.",
        classRestriction: "None",
    };

    export let Races: Table = {
        1: Human,
        2: Elf,
        3: Dwarf,
        4: Tabbit,
        5: Runefolk,
        6: Nightmare,
        7: Shadow,
        8: Lildraken,
        9: Grassrunner,
        10: Newman,
        11: Valkyrie,
    };
}