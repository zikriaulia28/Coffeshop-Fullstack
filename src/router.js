import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App"
import Home from "./pages/Home"
import History from "./pages/History"
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} /> },
  { path: "/home", element: <Home /> },
  { path: "/history", element: <History /> },
  { path: "/payment", element: <Payment /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
  { path: "/productdetails", element: <ProductDetails /> },

])

export default router