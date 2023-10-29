import promOne from '../../assets/pro1.jpg';

const PromotSection = () => {
    return (
        <div className=" flex justify-between gap-6 shadow-5xl flex-col md:flex-row-reverse md:h-[60vh] md:rounded-l-lg bg-sky-100">
        <figure><img className='object-cover md:w-96 h-full rounded-t-md md:rounded-r-t-lg md:rounded-l-none' src={promOne} /></figure>


        <div className=" space-y-3 md:ml-10 px-12 md:px-0 md:mt-16 mb-5">

            <div>
                <h2 className="uppercase text-3xl font-bold">Winter Wonderful!</h2>
                <p className='text-2xl font-semibold mt-4'>Megha Fashion <br /> <span className='text-xl font-semibold'>Sale</span> </p>
                <p className='text-2xl font-semibold mb-5'><span className='text-5xl font-bold'>50% </span>off</p>
            </div>

            <p className='text-lg font-medium'>Revamp Your Winter Wardrobe with Our Stellar Apparel Collection!

                Winter is here, and its time to make a statement with your style</p>
        </div>

    </div>
    );
};

export default PromotSection;