import {React, useState} from "react"
import Basket from "./Basket"
import ItemsToAdd from "./ItemsToAdd"
import item from "../Data/AddBasketData"
import "../Styles/StyleAddBasketPage.css"
import Modal from "../Modal"

export default function AddBasketPage(){
    const [basket, setBasket] = useState([])

    const handleRemove = (id) => {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
      };

    return(
        <>  
            <Modal openBtn="View Basket" emptyMsg="Shopping Basket is empty" closeBtn="close Basket" >
                <Basket onRemove={handleRemove} basket={basket} setBasket={setBasket} />                
            </Modal>
            <ItemsToAdd basket={basket} setBasket={setBasket} item={item} />
        </>
    )
}