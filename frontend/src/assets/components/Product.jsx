import React from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../features/basket/Basket";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addBasket(product));
  };
  return (
    <>
      <div className="card-image">
        <img src={product.image} alt="" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <button className="btn btn-primary" onClick={handleAddToBasket}>
        add to basket
      </button>
    </>
  );
};

export default Product;
