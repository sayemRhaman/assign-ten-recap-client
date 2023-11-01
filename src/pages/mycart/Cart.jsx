import { PropTypes } from "prop-types";
import Swal from "sweetalert2";


const Cart = ({ cart, carts, setCarts  }) => {
    const { _id, img, name, short_description, brand, rating } = cart;
    // console.log(Cart);


    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirmed');
                fetch(`http://localhost:3000/cartDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                              )
                              const remaining = carts.filter(crt => crt._id !== _id);
                              setCarts(remaining);
                        }
                    })
            }
        })



    }


    return (


        <div>


            <div className="flex justify-center h-[650px] ">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[65vh] w-full" src={img} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{short_description}</p>
                        <p>Brand : {brand} </p>
                        <p>Rating : {rating} </p>
                        <div className="card-actions justify-end">

                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-sky-700 px-3 py-1 text-white rounded-md w-full text-center">Delete</button>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;