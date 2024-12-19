import React from "react";
import Aboutme from "./components/Aboutme.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Intern from "./components/Intern.jsx";
import Contact from "./components/Contact.jsx";
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
      ],
    },
  ]);
  return <RouterProvider router={myrouter} />;
};

export default App;
