import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);

  if (!Array.isArray(basketItems)) {
    console.error("error basket isnot an array", basketItems);
    return <p>basket is boreken not working.</p>;
  }

  return (
    <div>
      <h2>Sepet</h2>
      {basketItems.length === 0 ? (
        <p>Sepet boş.</p>
      ) : (
        basketItems.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>Adet: {item.count}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
