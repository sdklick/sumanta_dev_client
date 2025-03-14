import React from "react";
import Aboutme from "./components/Aboutme.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Intern from "./components/Intern.jsx";
import Contact from "./components/Contact.jsx";
import Nopage404 from "./components/Nopage404.jsx";
const App = () => {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutme", element: <Aboutme /> },
        { path: "/skills", element: <Skills /> },
        { path: "/projects", element: <Projects /> },
        { path: "/internship", element: <Intern /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Nopage404 /> },
      ],
    },
  ]);
  return <RouterProvider router={myrouter} />;
};

export default App;
