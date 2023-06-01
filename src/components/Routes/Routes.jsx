import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";


export const router = createBrowserRouter([

    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allToys',
                element:<AllToys/>,
                loader:()=>fetch('https://happy-playtime-server.vercel.app/alltoys')
            },
            {
                path:'/toyDetails/:id',
                element: <PrivateRoute><ToyDetails/></PrivateRoute> ,
                loader:({params})=>fetch(`https://happy-playtime-server.vercel.app/alltoys/${params.id}`)
            },
            {
                path:'/addToy',
                element:<PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path:'/updateToys/:id',
                element:<PrivateRoute><UpdateToys/></PrivateRoute>,
                loader:({params})=>fetch(`https://happy-playtime-server.vercel.app/AllToys/${params.id}`)
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
        ]
    }
])