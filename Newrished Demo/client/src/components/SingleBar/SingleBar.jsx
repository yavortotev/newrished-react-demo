import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

import "./SingleBar.css"



const SingleBar = ({ flavor, protein, image, id, weight, isOwner }) => {

  const { email } = useAuthContext()
  const name = email?.split('@')[0]

  return (

    <li className="card">
      <img src={image} alt="travis" />
      <p>
        <strong>Flavor:</strong><span className="brand">{flavor}</span>
      </p>
      <p>
        <strong>Protein:</strong><span className="model">{protein}</span>
      </p>
      <p><strong>Weight:</strong><span className="value"></span>{weight}</p>
      <Link className="details-btn" to={`/products/${id}`}>Details</Link>
      {isOwner &&
        <div className='is-owner-deskr'>
          <p className='text-before-pink-name'>Custom-Made Just for You, <span className='custumerNameSpan'>{name}!</span></p>
        </div>}
    </li>
  )
};

export default SingleBar;


