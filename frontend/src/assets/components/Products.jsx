// import React, { useEffect } from "react";
// import { fetchProducts } from "../features/products/Products";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "./Product";

// const Products = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);
//   return (
//     <div>
//       <div className="card">
//         {products.map((product) => (
//           <Product key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  searchProduct,
  sortAz,
  sortZa,
  sortLowToHigh,
  sortHighToLow,
} from "../features/products/Products";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(searchProduct(value));
  };

  return (
    <div className="container">
      <h2 className="my-3">Products</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="btn-group mb-4">
        <button
          onClick={() => dispatch(sortAz())}
          className="btn btn-outline-primary"
        >
          A-Z
        </button>
        <button
          onClick={() => dispatch(sortZa())}
          className="btn btn-outline-primary"
        >
          Z-A
        </button>
        <button
          onClick={() => dispatch(sortLowToHigh())}
          className="btn btn-outline-success"
        >
          Price ↑
        </button>
        <button
          onClick={() => dispatch(sortHighToLow())}
          className="btn btn-outline-success"
        >
          Price ↓
        </button>
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="col-md-4">
              <Product product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
