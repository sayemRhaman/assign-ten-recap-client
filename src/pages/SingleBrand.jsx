import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";



const SingleBrand = ({ brands }) => {
  const { _id, img, name, brand, type, price, rating } = brands;





  return (

    <div className="">

      <div className=" rounded-xl bg-base-100 shadow-xl h-[550px]">

        <figure>
          <img className="h-[50vh] md:h-[55vh] w-full object-fill rounded-t-xl" src={img} />
        </figure>

        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>

          <div className="flex justify-between">
            <h2 className="card-title">{brand}</h2>
            <h2 className="card-title">{type}</h2>
          </div>

          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-600">Price: {price}</p>
            <p className="text-lg font-medium text-gray-600">Rating: {rating}</p>
          </div>
          <div className="flex  gap-2">
            <Link className="bg-sky-700 px-3 py-1 text-white rounded-md text-center w-full" to={`/productDetails/${_id}`}>
              <button className=" ">Details</button>
            </Link>
            <Link className="bg-sky-700 px-3 py-1 text-white rounded-md w-full text-center" to={`/updateProduct/${_id}`}>
              <button >Update</button>
            </Link>
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