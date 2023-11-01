import { useLoaderData, useNavigate, } from "react-router-dom";
import Footer from "./home/Footer";
import Nav from "./home/Nav";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";



const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const productDetails = useLoaderData();
    const { img, name, short_description, brand, rating } = productDetails;
    console.log(productDetails);


    const handleAddCart = () => {
        const CartProduct = { img, name, short_description, brand, rating, email: user.email };
        console.log(CartProduct);

        fetch('https://server-recap-assignment-o7o58b7yt-sayem-rhamans-projects.vercel.app/addCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(CartProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'success',
                        'You clicked the button!',
                        'success'
                    )

                    navigate('/myCart')
                }
            })



    }



    return (
        <div>
            <Nav></Nav>

            <div className="py-8 bg-sky-50">
                <h2 className="text-center text-2xl font-bold mb-8"> Product details Of {name}</h2>


                <div className="flex justify-center ">

                    <div className="flex bg-base-100 shadow-xl rounded-lg w-5/6 md:w-3/5 ">

                        <figure className="flex-1">
                            <img className="h-full w-full rounded-l-lg" src={img} alt="Shoes" />
                        </figure>

                        <div className="p-12 space-y-5 flex-1">
                            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                            <p className="text-lg font-medium text-gray-700">{short_description}</p>
                            <p className="text-base font-bold text-gray-600">Brand : {brand} </p>
                            <p className="text-base font-bold text-gray-600">Rating : {rating} </p>
                            <div className="card-actions justify-end">
                                <button onClick={handleAddCart} className="bg-sky-700 px-3 py-1 text-white rounded-md w-full font-semibold text-center">Add to Cart</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;