import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const BrandCard = ({ card }) => {
    const { img, brand } = card;
    return (
       
        <div>
            <Link to={`/products/${brand}`}>
                <div className="mx-auto">


                    <div className="card  h-72 bg-sky-50 shadow-xl">

                        <figure><img className="w-full" src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="text-2xl font-medium text-center">{brand}</h1>
                            

                        </div>
                    </div>

                </div>
            </Link>
        </div>

    );
};

BrandCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default BrandCard;