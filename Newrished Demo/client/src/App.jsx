//import AuthProvider from "./components/context/AuthContext";
import { Routes,Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

import {AuthContextProvider} from "./components/context/AuthContext"
import Products from "./components/Products/Products";
import CreateBar from "./components/CreateBar/CreateBar";
import About from "./components/About/About";
import Login from "./components/Loigin/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import EditPage from "./components/EditPage/EditPage";
import AuthGuard from "./components/Guards/AuthGuard";

import './index.css'
import LoginGuard from "./components/Guards/LoginGuard";






const App = () => {

 

  return (

    
     <AuthContextProvider>
     
      <NavBar />
      <Routes> 
        <Route element={<AuthGuard />}>
      <Route path={'createbar'} element={<CreateBar />} />
      <Route path={'logout'} element={<Logout />} />
      <Route path={'products/:id/edit'} element={<EditPage />} />
      </Route>
      
      <Route path={'/'} element={<Home />} />
      <Route path={'products'} element={<Products />} />
      <Route path={'about'} element={<About />} />
      <Route path={'products/:id'} element={<Details />} />
     
      <Route element={<LoginGuard />}>
      <Route path={'login'}  element={  <Login />} />
      <Route path={'register'} element={<Register />} />
      </Route>
      
      </Routes>
      
      
  
     </AuthContextProvider>
     
    
  );
};

export default App;
