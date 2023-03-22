import {useState} from "react"
import DataBox from "../DataBox";
import WLC from "../Images/WL_Cal.png"
import DUPE from "../Images/dupeMusic.png"
import BLD from "../Images/B_DO.png"
import Notify from "../Notify";

export default function ProjectPage(){
    const [showNotify, setShowNotify] = useState(false);

    const handleClick = () => {
        setShowNotify(true);
        setTimeout(() => {
          setShowNotify(false);
        }, 3000);
      };

    return(
    <>
       <DataBox version="Dupe Music Deleter" I1={<img width="350px" alt="d" src={DUPE}/>} />
       <DataBox version="Weight Loss Calculator" I1={<img width="350px" alt="d" src={WLC}/>} />
       <DataBox version="Blender Model" I1={<img width="350px" alt="d" src={BLD} />} />
       <DataBox version="Notify" 
       I1={<button onClick={handleClick}>{showNotify && (<Notify message="Example Texvt" type=""/>)}Example Notify</button>} 
       />
    </>
    );

}