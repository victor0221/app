import { React, useState } from "react";
import "../Styles/StyleEcom.css";

export default function EcomPage(p) {
    const [currentIndex, setCurrentIndex] = useState(-1)

    const handleClick = () => {
        p.setShowNotify(true);
        setTimeout(() => {
          p.setShowNotify(false);
        }, 3000);
      };

    console.log(currentIndex)

  return (
    <>
      {p.data.length === 0 ? 
        "no data"
      : (
        <>
          <h1>Mock Filters Below (no logic)</h1>
          <ul>
            {p.data.map((item, index) => (
              <li 
              
              className={ currentIndex === index ? "ListItemE" : null}
              onClick={() => {setCurrentIndex(index);
                handleClick()
            }} 
              
              key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
