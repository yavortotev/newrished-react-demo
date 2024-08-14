import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";




const LoginGuard = () => {
    const {isAuthenticated} = useAuthContext()

    if(isAuthenticated){
        return <Navigate to='/'/>
    }
    
    return <Outlet />
};

export default LoginGuard;