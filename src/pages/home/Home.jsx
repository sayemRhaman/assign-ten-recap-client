import Footer from "./Footer";
import Nav from "./Nav";
import slider1 from '../../assets/b-1.jpg';
import slider2 from '../../assets/b-2.jpg';
import slider3 from '../../assets/b-3.jpg';


const Home = () => {
    return (
        <div>
            <Nav></Nav>

            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full h-[70%] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/3">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full h-[70%] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/3">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full h-[60%]" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/3">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Home;