import bgone from  '../assets/akash.jpg';

import feshtow from '../assets/fress2.png';

import nogodtow from '../assets/nogod 2.jpg'

const Adv = () => {
    return (
        <div>
            <div className="carousel w-full h-[60vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src={bgone} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={feshtow} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={nogodtow} className="w-full" />
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                
            </div>
        </div>
    );
};

export default Adv;