import "./Styles/StyleDataBox.css"

export default function DataBox(p){
    return(
    <div className="Wrapper">
        <h3 className="Title">{p.version}</h3>
        <ul className="List">
            <li>{p.I1}</li>
            <li>{p.I2}</li>
            <li>{p.I3}</li>
            <li>{p.I4}</li>
            <li>{p.I5}</li>
            <li>{p.I6}</li>
            <li>{p.I7}</li>
            <li>{p.I8}</li>
            <li>{p.I9}</li>
            <li>{p.I10}</li>
        </ul>
    </div>
    );
};