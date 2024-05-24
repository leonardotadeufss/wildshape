interface propType {
    skills?: string | undefined,
    vulnerabilities?: string | undefined,
    resistances?: string | undefined,
    immunities?: string | undefined,
    conditionImmunities?: string | undefined,
    senses?: string | undefined,
    passive: number,
    languages?: string | undefined
}
export default function Abilities({ conditionImmunities, immunities, languages, resistances, senses, skills, vulnerabilities, passive }: propType) {
    return (<>
        <div>
            {skills && <p className="mb-0"><span className="fw-bold">Habilidades:</span> {skills} </p>}
            {vulnerabilities && <p className="mb-0"><span className="fw-bold">Vulnerabilidades:</span> {vulnerabilities} </p>}
            {resistances && <p className="mb-0"><span className="fw-bold">Resistências:</span> {resistances}</p>}
            {immunities && <p className="mb-0"><span className="fw-bold">Imunidades a Dano:</span> {immunities} </p>}
            {conditionImmunities && <p className="mb-0"><span className="fw-bold">Imunidades a Condição :</span> {conditionImmunities}</p>}
            <p className="mb-0"><span className="fw-bold">Sentidos :</span> Percepção passiva {passive} {senses ? ',' + senses : ''} </p>
            {languages && <p className="mb-0"><span className="fw-bold">Idiomas :</span> {languages}</p>}
        </div>
    </>
    )
};

