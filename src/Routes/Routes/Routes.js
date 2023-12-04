import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
// import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import AddProducts from "../../Pages/sellerPages/AddProducts/AddProducts";
import AllUsers from "../../Pages/AdminPages/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]

    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path: '/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }

])
