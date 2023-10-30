import { PropTypes } from "prop-types";



const SingleBrand = ({ brands }) => {
  const { img, name, brand, type, price, short_description, rating } = brands;



  return (

    <div className="">

      <div className=" rounded-xl bg-base-100 shadow-xl h-[600px]">

        <figure>
          <img className="h-[55vh] w-full object-fill rounded-t-xl" src={img} />
        </figure>

        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p className="text-base text-gray-600 font-normal">{short_description}</p>
          <div className="flex justify-between">
            <h2 className="card-title">{brand}</h2>
            <h2 className="card-title">{type}</h2>
          </div>
         
          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-600">{price}</p>
            <p className="text-lg font-medium text-gray-600">{rating}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-sky-700 px-3 py-1 text-white rounded-md block w-full">Details</button>
            <button className="bg-sky-700 px-3 py-1 text-white rounded-md block w-full">Update</button>
          </div>
        </div>


      </div>
    </div>

  );


};
SingleBrand.propTypes = {
  brands: PropTypes.object.isRequired
}

export default SingleBrand;