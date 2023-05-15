import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import { orderItemLoader } from "./Loader/orderItemsLoader";
import ProceedOrder from "./components/ProccedOrder/ProceedOrder";
import SignUp from "./components/SignUP/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoutes from "./Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: () => fetch('http://localhost:3000/products/total')
      },
      {
        path: "orders",
        element: <Order />,
        loader: orderItemLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoutes>
            <Inventory />
          </PrivateRoutes>
        ),
      },
      {
        path: "proceed-order",
        element: (
          <PrivateRoutes>
            <ProceedOrder />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
