import { useAllBars } from "../../hooks/useBars.js";
import { useAuthContext } from "../context/AuthContext.jsx";

import SingleBar from "../SingleBar/SingleBar.jsx";

import "./Product.css";

const Products = () => {

  const [bars, setBars] = useAllBars()
  const { userId } = useAuthContext()


  return (
    <section id="dashboard">
      <ul className="card-wrapper">
        {bars.length > 0

          ? (
            bars.map(bar => (
              <SingleBar
                key={bar._id}
                flavor={bar.flavor}
                image={bar.imageUrl}
                protein={bar.protein}
                weight={bar.weight}
                isOwner={userId === bar._ownerId}

                id={bar._id}
              />
            ))
          )

          : (
            <h2>There are no items added yet.</h2>
          )}

      </ul>
    </section>
  );
};

export default Products;


