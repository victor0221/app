import {React} from "react"
import "../Styles/StyleSearchBar.css"

export default function SearchBar(p){


    return(
        <>
        <input type="text" onChange={(event) => p.setInput(event.target.value)} placeholder="Search A Name!"></input>
        </>
    )
}