import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
// import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import AddProducts from "../../Pages/sellerPages/AddProducts/AddProducts/AddProducts";
import AllUsers from "../../Pages/AdminPages/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProducts from "../../Pages/sellerPages/MyProducts/MyProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import CategoryProduct from "../../Pages/CategoryItems/CategoryProduct";

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
            {
                path: '/allProducts/:category',
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.category}`),
                element: <CategoryProduct></CategoryProduct>
            },
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/myProducts',
                element:  <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    }

])
