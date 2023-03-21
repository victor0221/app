import DataBox from "../DataBox";
import WLC from "../images/WL_Cal.png"
import DUPE from "../images/dupeMusic.png"
import BLD from "../images/B_DO.png"

export default function ProjectPage(){

    return(
    <>
        <p>HELLOW WORLD THIS IS A TEST</p>
       <DataBox version="Dupe Music Deleter" I1={<img width="350px" alt="d" src={DUPE}/>} />
       <DataBox version="Weight Loss Calculator" I1={<img width="350px" alt="d" src={WLC}/>} />
       <DataBox version="Blender Model" I1={<img width="350px" alt="d" src={BLD} />} />
    </>
    );

}