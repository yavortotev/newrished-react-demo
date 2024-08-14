
import newrishedHome from "../../assets/main.jpg"
import { useAuthContext } from "../context/AuthContext";
import onlyUserDisplay from "../../assets/cover565.jpg"




const Home = () => {
  const {isAuthenticated} = useAuthContext()


  
  // const {  } = useContext(AuthContext);
  return (
    
    <div>
  {!isAuthenticated
    ? <img className="one" src={newrishedHome} alt="Description of newrishedHome image" />
    : <img className="one" src={onlyUserDisplay} alt="Description of onlyUserDisplay image" />}
</div>


  )
};

export default Home;
