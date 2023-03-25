import {React, useState} from "react"
import data from "../Data/SearchBarData"
import SearchBar from "./SearchBar"
import SearchDataDisplay from "./SearchDataDisplay"
import "../Styles/StyleSearchBar.css"

export default function SearchBarPage(){
    const [input, setInput] = useState("a")
    return(
        <>
            <SearchBar input={input} data={data} setInput={setInput}/>
            <SearchDataDisplay input={input} data={data}/>
        </>
    )
}