'use client'
import beasts from "src/data/pt-br"
import { BaseSyntheticEvent, useContext, useEffect, useState } from "react"
import { BeastsContext } from "./BeastsProvider"

export default function Search() {


    const { beastsInView, setBeasts } = useContext(BeastsContext)
    const [isSearching, setSearching] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')


    function handleChange(e: BaseSyntheticEvent) {
        setSearch(e.currentTarget.value)
        var search: string = e.currentTarget.value.toLowerCase()
        if (search == '') {
            setSearching(false)
        } else {
            setSearching(true)
        }

        var found = beasts.filter(beasts => beasts.name.toLowerCase().includes(search))
        setBeasts(found.length ? found : [])
    }

    const clearInput = () => {
        setSearch('')
        setBeasts(beasts)
    }

    return (
        <div className="w-25 mx-auto position-relative">
            <input className="rounded form-control" placeholder="Pesquisar" type='search' value={search} onChange={e => handleChange(e)} />
            {isSearching && <button onClick={clearInput} id="clearSearch" className="position-absolute">x</button>}
        </div>
    )
};

