import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useCreateBar } from '../../hooks/useBars';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';


import "./CreateBar.css"



const initialValues = {
  protein: "",
  imageUrl: "",
  carbs: "",
  weight: "",
  fats: "",
  flavor: ""
}


const CreateBar = () => {

  const [error, setError] = useState('')
  const { email } = useAuthContext()
  const name = email?.split('@')[0]
  const navigate = useNavigate()
  const createBar = useCreateBar()
  const createHandler = async (values) => {

    try {

      const { protein, carbs, fats, flavor, weight, imageUrl } = values;

      if (!protein.trim() || !carbs.trim() || !fats.trim() || !flavor.trim() || !weight.trim() || !imageUrl.trim()) {
        setError('All fields are required. Please fill out all fields.');
        return;
      }

      const { _id: barId } = await createBar(values)
      navigate(`/products/${barId}`)

    } catch (err) {

      setError(err.message);
    }
  }

  const {
    changeHandler,
    values,
    submitHandler
  } = useForm(initialValues, createHandler)




  return (
    <div className='wrapper-big-create'>
      <section id="create">
        <div className="form">
        <h2>
    Design Your  <br /> Custom
    Protein Bar,
    <span className="single-bar-name design-name">{name}!</span>
  </h2>
          <form onSubmit={submitHandler} className="create-form">
            <input
              type="text"
              name="flavor"
              value={values.flavor}
              onChange={changeHandler}
              id="flavor"
              placeholder="flavor"
            />
            <input
              type="text"
              name="protein"
              value={values.protein}
              onChange={changeHandler}
              id="protein"
              placeholder="protein"
            />
            <input
              type="text"
              name="carbs"
              value={values.carbs}
              onChange={changeHandler}
              id="carbs"
              placeholder="carbs"
            />
            <input
              type="text"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              id="imageUrl"
              placeholder="Image url"
            />
            <input
              type="text"
              name="fats"
              value={values.fats}
              onChange={changeHandler}
              id="fats"
              placeholder="fats"
            />
            <input
              type="text"
              name="weight"
              value={values.weight}
              onChange={changeHandler}
              id="weight"
              placeholder="weight"
            />
            {error && (
              <p className="field">
                <span style={{ fontSize: "18px", color: "red" }}>{error}</span>
              </p>

            )}
            <button className='createButton' type="submit">Create</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateBar;