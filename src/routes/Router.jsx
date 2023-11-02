import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/home/Home";
import SingIn from "../pages/SingIn";
import Footer from "../pages/home/Footer";
import SingUP from "../pages/SingUp";
import BrandDetails from "../pages/BrandDetails";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import MyCart from "../pages/mycart/MyCart";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Catagoris.json')
            },
            {
                path: '/brandDetails/:brand',
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => fetch(`https://server-recap-assignment-ten.vercel.app/products/${params.brand}`)
            },

            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },

            {
                path: '/productDetails/:_id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-recap-assignment-ten.vercel.app/productDetails/${params._id}`)
            },

            {
                path: '/updateProduct/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-recap-assignment-ten.vercel.app/updateProduct/${params.id}`)
            },

            {
                path: '/myCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,

            },

            {
                path: '/singIn',
                element: <SingIn></SingIn>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/singUP',
                element: <SingUP></SingUP>
            }
        ]
    }
])

export default router;