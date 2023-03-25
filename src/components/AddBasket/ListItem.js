import {React} from "react"
export default function ListItem(p){


    return(
        <>
            <li>{p.item.productName}</li>
            <li><img alt="d" src={p.item.img}/></li>
            <li>£{p.item.price}</li>

        </>
    )
}