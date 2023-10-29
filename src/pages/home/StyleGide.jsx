import guideOne from '../../assets/five.webp';

const StyleGide = () => {
    return (
        <div className="py-12 bg-sky-50 ">
        <div className="text-center ">
            <h2 className="text-2xl font-semibold"> Style Tips & Guides</h2>
            <p className="text-lg font-normal text-gray-700">Confused about what to wear? Our style experts are here to help.</p>
        </div>

        <div className="justify-center items-center py-8">

            <div className="">
                <figure>
                    <img className='h-[80vh] max-w-7xl mx-auto' src={guideOne} alt="Shoes" />
                </figure>

            </div>


        </div>




    </div>
    );
};

export default StyleGide;