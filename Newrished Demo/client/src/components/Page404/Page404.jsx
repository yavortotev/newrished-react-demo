
import { Link } from "react-router-dom";
import page404 from "../../assets/page404.jpg"

import "./Page404.css";









const Page404 = () => {
  


  
  return (
    
    <div>
         <div className="not-found">
      <h1>404 - Page Not Found</h1>
     <Link className="homeButton" to="/">Go Back to Home</Link>
    </div>
  
     <img className="one" src={page404} alt="Description of newrishedHome image" />
    
</div>


  )
};

export default Page404;