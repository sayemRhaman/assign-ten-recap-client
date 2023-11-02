import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Cart from "./Cart";
import Nav from "../home/Nav";
import Footer from "../home/Footer";
import { BsFillCartCheckFill, } from "react-icons/bs";



const MyCart = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [carts, setCarts] = useState([]);


    useEffect(() => {
        fetch(`https://server-recap-assignment-ten.vercel.app/addCart/${email}`)
            .then(res => res.json())
            .then(data => {

                setCarts(data)
                console.log(data);
            })
    }, [email])





    return (
        <div>
            <Nav></Nav>
            <div className="bg-sky-50/40 px-20 pb-20 pt-14">
                <div className="bg-white mb-12 px-3 py-2 flex justify-center items-center gap-6 shadow-sm rounded-lg">
                    <h2 className="text-3xl font-semibold text-sky-500"> My Cart </h2>
                    <span className="text-3xl font-semibold text-sky-500"> <BsFillCartCheckFill></BsFillCartCheckFill> </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        carts.map(cart =>
                            <Cart key={cart._id}
                                cart={cart}
                                carts={carts}
                                setCarts={setCarts}
                            ></Cart>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;