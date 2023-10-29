import { Link } from "react-router-dom";
import Footer from "./home/Footer";
import Nav from "./home/Nav";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const SingIn = () => {
    const { singIn } = useContext(AuthContext);
  

    const handleSingIn = e => {
        e.preventDefault();
        const form = new FormData (e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        //singIn
        singIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
        
    }

    return (
        <div className=' bg-sky-50 50/40'>
        <Nav></Nav>


        <div className="my-24 bg-white shadow-md md:w-3/4 lg:w-1/2 mx-auto p-10 rounded-xl">
            <h2 className="text-2xl text-center mb-8 font-bold text-sky-600"> Sing In</h2>
            <form onSubmit={handleSingIn} className="">

                <div  className="border-2 border-sky-600 px-1 py-3 bg-white outline-none rounded-lg w-full flex justify-center items-center gap-2 text-lg font-semibold">
                  
                  Sing In With Google
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="border-2 border-sky-600 px-2 py-3 bg-white outline-none rounded-lg" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="border-2 border-sky-600 px-2 py-3 bg-white outline-none rounded-lg" required />
                </div>


                <div className="form-control mt-6">
                    <button className="p-2 rounded-md text-white font-medium text-lg bg-sky-600">Sing In</button>
                </div>


            </form>

            <p className="text-center mt-4 text-base font-medium">Do not have an account Please <Link className="text-lg text-sky-600" to='/singUP'>Sing Up</Link> </p>
        </div>


        <Footer></Footer>

    </div>
    );
};

export default SingIn;