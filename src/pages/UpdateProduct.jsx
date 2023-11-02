import { useLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";
import Nav from "./home/Nav";
import Footer from "./home/Footer";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, img, name, brand, type, price, rating, short_description } = product;
    console.log(product);
     

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const img = form.img.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const updatedProduct = { name, img, brand, type, price, rating, short_description };
        console.log(updatedProduct);

        //send data to server
        fetch(`https://server-recap-assignment-ten.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    Swal.fire(
                        'Success',
                        'Product Updated succesfully',
                        'success'
                      )
                }
            })

    }




    return (
        <div>
            <Nav></Nav>
        
            <div className="bg-sky-200 p-24">
                <h3 className="text-center text-3xl font-bold mb-8">Add product</h3>

                <form onSubmit={handleUpdateProduct} className="" >
                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Name</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Product Name" defaultValue={name} name="name" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Image</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="image" defaultValue={img} name="img" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Brand Name</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Brand Name" defaultValue={brand} name="brand" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Type</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="type" defaultValue={type} name="type" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Price</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Price" defaultValue={price} name="price" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Rating</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="rating" name="rating" defaultValue={rating} className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="text-base font-medium text-gray-600">short_description</span>
                        </label>
                        <label className="">

                            <input type="text" placeholder="short_description" defaultValue={short_description} name="short_description" className="outline-none px-3 py-2 rounded-lg w-full" />
                        </label>
                    </div>


                    <div className="form-control mt-8 md:w-full">

                        <input type="submit" value="UPdate Product" className="bg-sky-600 text-white px-3 py-3 rounded-lg text-lg font-semibold" />
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};
UpdateProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default UpdateProduct;