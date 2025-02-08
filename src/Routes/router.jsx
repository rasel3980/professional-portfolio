import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import About from "../Components/About/About";
import ProjectCard from "../Pages/Project/Project";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/projects",
                element:<ProjectCard></ProjectCard>
            },
            {
                path:"/project/:id",
                element:<Details></Details>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"/skill",
                element:<Skills></Skills>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
        ]
    }
])