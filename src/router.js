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
import PrivateRoute from "./utils/wrapper/privateRoute";



const router = createBrowserRouter([
  // { path: "/", element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} /> },

  { path: "/", element: <Home /> },
  { path: "/history", element: (<PrivateRoute> <History /> </PrivateRoute>), },
  { path: "/payment", element: (<PrivateRoute> <Payment /> </PrivateRoute>), },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: (<PrivateRoute> <Profile /> </PrivateRoute>), },
  { path: "/product", element: (<PrivateRoute> <Product /> </PrivateRoute>), },
  { path: "/product/:id", element: (<PrivateRoute> < ProductDetails /> </PrivateRoute>), },
  { path: "/auth", element: <Auth />, },


])

export default router