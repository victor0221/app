import {React} from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ItemsToAdd(props){
    const {basket, setBasket, item} = props

    const handleClick = (e) => {
        const itemToAdd = {
            id: uuidv4(),
            productName: e.currentTarget.getAttribute("data-name"),
            img: e.currentTarget.getAttribute("data-img"),
            price: e.currentTarget.getAttribute("data-price"),
        }
        setBasket([...basket, itemToAdd])
    }

    let itemList = item.map(i => (
        <div key={i.id}>
            <h5>{i.productName}</h5>
            <img alt="d" src={i.img}/>
            <p>{i.price}</p>
            <button data-name={i.productName} data-img={i.img} data-price={i.price} onClick={handleClick}>Add to Basket</button>
        </div>
    ))
    return(
        <>
            {itemList}
        </>
    )
}
