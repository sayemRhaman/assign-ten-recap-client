import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/home/Home";
import SingIn from "../pages/SingIn";
import Footer from "../pages/home/Footer";
import SingUP from "../pages/SingUP";
import BrandDetails from "../pages/BrandDetails";



const router = createBrowserRouter ([
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
              path: '/products/:brand',
              element: <BrandDetails></BrandDetails>,
              loader: ({params}) => fetch(`http://localhost:3000/products/${params.brand}`)
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