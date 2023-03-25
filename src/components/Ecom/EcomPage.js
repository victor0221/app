import {React, useState} from "react"
import ListGroup from "..//Ecom/ListGroup"
import data from "../Data/EcomListData";
import Notify from "../Notify"
import EcomItem from "./EcomItem";
import item from "..//Data/EcomItemsData"

function EcomPage() {
  const [notify, setShowNotify] = useState(false)
  const [container, setContainer] = useState([])
     
  return (
    <>
    <ListGroup setShowNotify={setShowNotify} data={data}/>
    <div className="GridViewEcom"><EcomItem setContainer={setContainer} container={container}item={item} /></div>
    
    {notify && <Notify message="Item clicked" type="--"/>}
    </>
  );
}

export default EcomPage;