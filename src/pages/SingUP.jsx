import { Link } from "react-router-dom";
import Footer from "./home/Footer";
import Nav from "./home/Nav";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";


const SingUP = () => {

    const { createUser, } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

   const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,email,password);

    //reset error 
    setRegisterError('');
    setSuccess('');


   if(!/^(?=.*[A-Za-z])(?=.*[\W_]).{6,}$/.test(password)){
       setRegisterError('Password shoude have a capital latter, a spcial character and less then six character')
       return
   }
    

//createUser 

    createUser (email, password) 

    .then(result => {
        console.log(result.user);
        const user = { email, password, name };
        setSuccess('User Created succesfully')
        
        fetch('http://localhost:5300/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            

            if(data.insertedId) {
                console.log('user added data to the database');
            }
            
         
        })
    })



    .catch(error => {
        console.error(error)
        setRegisterError(error.message)
    })
   }
    



    return (
        <div className=' bg-sky-50/40'>
        <Nav></Nav>


        <div className="my-24 bg-white shadow-xl md:w-3/4 lg:w-1/2 mx-auto p-10 rounded-lg">
            <h2 className="text-2xl text-center mb-8 font-bold text-sky-600">Create New Account</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                 
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="border-2 border-sky-600 px-2 py-3 bg-white outline-none rounded-lg" required />
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
                    <button className="p-2 rounded-md text-white font-medium text-lg bg-sky-600" >Sing Up</button>
                </div>


            </form>

            {
                success &&  <p className="mt-4 text text-sky-600 text-center text-lg font-medium">{success}</p>
            }

            {
                registerError && <p className=" mt-4  text-red-700 text-center">{registerError}</p>
            }

            <p className="mt-4 text-center text-base font-medium">Already have an account Please <Link className="text-lg text-sky-600" to='/singIn'>Sing In</Link></p>
        </div>


        <Footer></Footer>

    </div>
    );
};

export default SingUP;