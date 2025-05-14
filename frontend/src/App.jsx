import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchProducts } from "./assets/features/products/Products";
import { useEffect } from "react";
import Products from "./assets/components/Products";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Services from "./assets/pages/Services";
import Basket from "./assets/pages/Basket";
import Admin from "./assets/pages/Admin/Admin";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
