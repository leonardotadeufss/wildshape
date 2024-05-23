interface Beast {
    "name": string,
    "img": string,
    "type"?: string,
    "size": string,
    "skills"?: string,
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
    "vulnerabilities"?: string,
    "resistances"?: string,
    "immunities"?: string,
    "conditionImmunities"?: string,
    "senses"?: string,
    "passive"?: number,
    "languages"?: string,
    "cr": string,
    "traits"?: Array<Trait>,
    "actions"?: Array<Action>,
    "environments": Array<string>
}


export interface Action {
    "name": string,
    "text": string
}
export interface Trait {
    "name": string,
    "text": string
}

export default Beast