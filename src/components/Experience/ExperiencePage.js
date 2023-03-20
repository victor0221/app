import DataBox from "../DataBox";
import RALogo from "../images/RA.png";
import CSSLogo from "../images/CSS.png";
import HTMLLogo from "../images/HTML.png";
import JSLogo from "../images/JS.png";
import SQLLogo from "../images/SQL.png";
import PythonLogo from "../images/Python.png";
import ReactLogo from "../images/React.png";
import SQLSERVERLogo from "../images/SQL_Server.png";
import BRLogo from "../images/BR.png";
import AccessLogo from "../images/MS_Access.png";



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