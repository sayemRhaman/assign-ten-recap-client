import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import PromotSection from "./PromotSection";
import StyleGide from "./StyleGide";
import BrandCard from "./BrandCard";





const Home = () => {
    const card = useLoaderData();
    return (
        <div>
            <Nav></Nav>

            <Banner></Banner>

            <StyleGide></StyleGide>

            {/* survice card */}
            <div>

                <h2 className="text-3xl font-bold text-center mt-16">Our Brands</h2>
                <hr className="w-36 mt-2 border-[1px] border-sky-200 mx-auto rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 md:px-24 gap-8 py-16 ">

                    {
                        card.map(aCard => <BrandCard key={aCard.id}
                            card={aCard}
                        > </BrandCard>)
                    }
                </div>
            </div>



            <PromotSection></PromotSection>

            <Footer></Footer>
        </div>
    );
};

export default Home;