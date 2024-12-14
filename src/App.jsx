import React, { Children } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/Navbar.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
const App = () => {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutme", element: <Aboutme /> },
      ],
    },
  ]);
  return <RouterProvider router={myrouter} />;
};

export default App;
