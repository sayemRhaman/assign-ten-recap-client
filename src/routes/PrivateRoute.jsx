import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";


const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    if(loading) {
        return <progress className=" progress w-56"></progress>
    }

    if(user) {
        return children;
    }
   
    return <Navigate state={location?.pathname}  to='/singIn'></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoute;