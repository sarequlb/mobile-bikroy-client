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
import CategoryProducts from "../../Pages/CategoryItems/CategoryProducts";
import CategoryProductDetails from "../../Pages/CategoryItems/CategoryProductDetails";
import WishlistItems from "../../Pages/WishlistItems/WishlistItems";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import MyBuyers from "../../Pages/sellerPages/MyBuyers/MyBuyers";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blogs from "../../Pages/Blogs/Blogs";
import PageNotFound from "../../SharedPage/PageNotFounc/PageNotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allProducts/:category',
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.category}`),
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            },
            {
                path: '/allProducts/product/:id',
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/product/${params.id}`),
                element: <PrivateRoute><CategoryProductDetails></CategoryProductDetails></PrivateRoute>
            },
        ]

    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
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
            {
                path: '/dashboard/myBuyers',
                element:  <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/wishlists',
                element:  <PrivateRoute><WishlistItems></WishlistItems></PrivateRoute>
            },
            {
                path: '/dashboard/myBooking',
                element:  <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            }
        ]
    }

])
