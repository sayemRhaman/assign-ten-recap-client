import Footer from "./home/Footer";
import Nav from "./home/Nav";


const AddProduct = () => {
     const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const img = form.img.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const newProduct = { name, img, brand, type, price, rating, short_description };
        console.log(newProduct);

     }
    return (
        <div>
            <Nav></Nav>
            <div className="bg-sky-200 p-24">
                <h3 className="text-center text-3xl font-bold mb-8">Add product</h3>

                <form onSubmit={handleAddProduct} className="" >
                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Name</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Product Name" name="name" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Image</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="imgage" name="img" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Brand Name</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Brand Name" name="brand" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Type</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="type" name="type" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex gap-3">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Price</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="Price" name="price" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-base font-medium text-gray-600">Rating</span>
                            </label>
                            <label className="">

                                <input type="text" placeholder="rating" name="rating" className="outline-none px-3 py-2 rounded-lg w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="text-base font-medium text-gray-600">short_description</span>
                        </label>
                        <label className="">

                            <input type="text" placeholder="short_description" name="short_description" className="outline-none px-3 py-2 rounded-lg w-full" />
                        </label>
                    </div>

                    
                    <div className="form-control mt-8 md:w-full">
                      
                     <input type="submit" value="Add Product" className="bg-sky-600 text-white px-3 py-3 rounded-lg text-lg font-semibold" />
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;