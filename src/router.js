import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import App from "./pages/App"
import Home from "./pages/Home"
import History from "./pages/History"
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Auth from "./pages/Auth";


const router = createBrowserRouter([
  // { path: "/", element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} /> },
  { path: "/", element: <Home /> },
  { path: "/history", element: <History /> },
  { path: "/payment", element: <Payment /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:id", element: < ProductDetails /> },
  {
    path: "/auth",
    element: <Auth />,
  },


])

export default router