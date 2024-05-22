interface Beast {
    "name": string,
    "img"?: string,
    "type"?: string,
    "size": string,
    "hp": number,
    "roll": string,
    "ac": number,
    "speed"?: number,
    "swim"?: number,
    "str": number,
    "dex": number,
    "con": number,
    "int": number,
    "wis": number,
    "cha": number,
    "resistances"?: string,
    "immunities"?: string,
    "conditionImmunities"?: string,
    "senses"?: string,
    "passive"?: number,
    "languages"?: string,
    "cr": string,
    "traits"?: Array<Action>,
    "actions"?: Array<Trait>,
    "environments": Array<string>
}


interface Action {
    "name": string,
    "text": string
}
interface Trait {
    "name": string,
    "text": string
}

export default Beast