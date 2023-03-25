import React from "react"

export default function Basket(props) {
  const removeItem = (id) => {
    props.setBasket(prev => prev.filter(item => item.id !== id));
  };

  const basketList = props.basket.map(bItem => (
    <div key={bItem.id}>
      <h5>{bItem.productName}</h5>
      <img alt="d" src={bItem.img}/>
      <p>{bItem.price}</p>
      <button onClick={() => removeItem(bItem.id)}>Remove</button>
    </div>
  ));

  return (
    <>
      {basketList}
    </>
  );
}
