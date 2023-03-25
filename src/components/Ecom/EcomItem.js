import { React} from "react";
import "../Styles/StyleEcom.css";
import EcomAddToContainer from "./EcomAddToContainer";

export default function EcomItem(p) {
    let items = p.item.map((newItem =>( 
        <div key={newItem.id} className="BorderThing">
            <h4>{newItem.productName}</h4>
            <img alt="1" src={newItem.img}/>
            <p>£{newItem.price}</p>
            <EcomAddToContainer container={p.container} setContainer={p.setContainer} newItem={newItem}/>
        </div>
    )))


  return (
    <>
    {items}

    </>
  );
}