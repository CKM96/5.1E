export type Character = {
    name: string
    race: string
    background: string
    classes: Class[]
    maxHp: number
    hp: number
    tempHp: number
    maxMana: number
    mana: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    inspiration: boolean
    proficiencies: Proficiency[]
}

export type Class = Druid

export enum ClassName {
    ARTIFICER,
    BARBARIAN,
    BARD,
    CLERIC,
    DRUID,
    FIGHTER,
    MONK,
    PALADIN,
    RANGER,
    ROGUE,
    SORCERER,
    WARLOCK,
    WIZARD
}

export enum DruidSubclass {
    DREAMS,
    LAND,
    MOON,
    SHEPHERD,
    SPORES,
    STARS,
    WILDFIRE
}

export enum PaladinSubclass {
    ANCIENTS,
    CONQUEST,
    CROWN,
    DEVOTION,
    GLORY,
    OATHBREAKER,
    REDEMPTION,
    VENGEANCE,
    WATCHERS,
}

export enum RogueSubclass {
    ARCANE_TRICKSTER,
    ASSASSIN,
    INQUISITIVE,
    MASTERMIND,
    PHANTOM,
    SCOUT,
    SOULKNIFE,
    SWASHBUCKLER,
    THIEF
}

export type Druid = {
    className: ClassName.DRUID
    level: number
    subClass?: DruidSubclass
}

export type Paladin = {
    className: ClassName.PALADIN
    level: number
    subClass?: PaladinSubclass
}

export type Rogue = {
    className: ClassName.ROGUE
    level: number
    subClass?: RogueSubclass
}

export enum Proficiency {
    ACROBATICS = "Acrobatics",
    ANIMAL_HANDLING = "Animal Handling",
    ARCANA = "Arcana",
    ATHLETICS = "Athletics",
    DECEPTION = "Deception",
    HISTORY = "History",
    INSIGHT = "Insight",
    INTIMIDATION = "Intimidation",
    INVESTIGATION = "Investigation",
    MEDICINE = "Medicine",
    NATURE = "Nature",
    PERCEPTION = "Perception",
    PERFORMANCE = "Performance",
    PERSUASION = "Persuasion",
    RELIGION = "Religion",
    SLEIGHT_OF_HAND = "Sleight of Hand",
    STEALTH = "Stealth",
    SURVIVAL = "Survival"
}

// Example of how to loop over enum values
//  (
//     Object.values(Proficiencies).filter(
//         (value) => typeof value === "number"
//       ) as number[]
//     )