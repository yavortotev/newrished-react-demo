import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";




const AuthGuard = () => {
    const {isAuthenticated} = useAuthContext()

    if(!isAuthenticated){
        return <Navigate to='login'/>
    }
  
  
  return <Outlet />
};

export default AuthGuard;
