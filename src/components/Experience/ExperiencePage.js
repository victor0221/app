import DataBox from "../DataBox";
import RALogo from "../Images/RA.png";
import CSSLogo from "../Images/CSS.png";
import HTMLLogo from "../Images/HTML.png";
import JSLogo from "../Images/JS.png";
import SQLLogo from "../Images/SQL.png";
import PythonLogo from "../Images/Python.png";
import ReactLogo from "../Images/React.png";
import SQLSERVERLogo from "../Images/SQL_Server.png";
import BRLogo from "../Images/BR.png";
import AccessLogo from "../Images/MS_Access.png";



export default function ExpiriencePage(){

    return(
        <div className="DataBoxGridView">
            <DataBox version="React Admin" I1={<img width="100px" src={RALogo} alt="RA_Logo"/>}/>
            <DataBox version="HTML" I1={<img width="100px" src={HTMLLogo} alt="RA_Logo"/>}/>
            <DataBox version="CSS" I1={<img width="100px" src={CSSLogo} alt="RA_Logo"/>}/>
            <DataBox version="JavaScript" I1={<img width="100px" src={JSLogo} alt="RA_Logo"/>}/>
            <DataBox version="Python" I1={<img width="100px" src={PythonLogo} alt="RA_Logo"/>}/>
            <DataBox version="SQL" I1={<img width="100px" src={SQLLogo} alt="RA_Logo"/>}/>
            <DataBox version="SQL Server Managment Studio" I1={<img width="100px" src={SQLSERVERLogo} alt="RA_Logo"/>}/>
            <DataBox version="React" I1={<img width="100px" src={ReactLogo} alt="RA_Logo"/>}/>
            <DataBox version="Bold Reports" I1={<img width="100px" src={BRLogo} alt="RA_Logo"/>}/>
            <DataBox version="Microsoft Access" I1={<img width="100px" src={AccessLogo} alt="RA_Logo"/>}/>
        </div>
    );
}