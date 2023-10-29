import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "./SingleBrand";
import Nav from "./home/Nav";
import Footer from "./home/Footer";


const BrandDetails = () => {
    const brandDetails = useLoaderData()
    const { brand } = useParams()

    return (
        <div className="">
            <Nav></Nav>
            <div className="px-8 bg-sky-100/70 py-4"> 
                <h2 className="text-center text-3xl font-bold py-8">brand Page Of {brand} </h2>
                <div className="grid grid-cols-3 gap-4">
                    {

                        brandDetails.map(brands => <SingleBrand
                            key={brands._id} brands={brands}
                        ></SingleBrand>)

                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandDetails;