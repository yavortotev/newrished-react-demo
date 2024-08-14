import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneBarById } from "../../hooks/useBars";
import * as barApi from "../../api/bars-api";

import "./EditPage.css"
import { useAuthContext } from "../context/AuthContext";


const initialValues = {
  protein: "",
  imageUrl: "",
  carbs: "",
  weight: "",
  fats: "",
  flavor: ""
};

const EditPage = () => {
  const { id } = useParams();
  const [bar, setBar] = useGetOneBarById(id);
  const navigate = useNavigate()
  const { email } = useAuthContext()
  const name = email?.split('@')[0]

  const {
    changeHandler,
    submitHandler,
    values,
    setValues
  } = useForm(initialValues, async (values) => {
    try {
      await barApi.update(id, values);
      navigate(`/products/${id}`)

    } catch (error) {
    
      throw new Error(err.message);
    }
  });


  useEffect(() => {
    if (bar) {
      setValues(bar);
    }
  }, [bar, setValues]);

  return (
    <div className="owner-background">
      <section id="edit">
        <div className="form">
          <h2>
            Edit Your Custom Protein Bar,
            <span className="single-bar-name design-name">{name}!</span>
          </h2>
          <form className="edit-form" onSubmit={submitHandler}>
          <label htmlFor="protein" >Protein:</label>
            <input
              onChange={changeHandler}
              value={values.protein || ''}
              type="text"
              name="protein"
              id="protein"
              placeholder="Protein"
            />
            <label htmlFor="carbs" >Carbs:</label>
            <input
              onChange={changeHandler}
              value={values.carbs || ''}
              type="text"
              name="carbs"
              id="carbs"
              placeholder="Carbs"
            />
             <label htmlFor="bar-img" >Image URL:</label>
            <input
              onChange={changeHandler}
              value={values.imageUrl || ''}
              type="text"
              name="imageUrl"
              id="bar-img"
              placeholder="Image URL"
            />
            <label htmlFor="weight" >Weight:</label>
            <input
              onChange={changeHandler}
              value={values.weight || ''}
              type="text"
              name="weight"
              id="weight"
              placeholder="Weight"
            />
            <label htmlFor="fats" >Fats:</label>
            <input
              onChange={changeHandler}
              value={values.fats || ''}
              type="text"
              name="fats"
              id="fats"
              placeholder="Fats"
            />
            <label htmlFor="flavor" >Flavor:</label>
            <input
              onChange={changeHandler}
              value={values.flavor || ''}
              type="text"
              name="flavor"
              id="flavor"
              placeholder="Flavor"
            />
            <div className="buttons">
            <button type="submit">Edit</button>
            <button onClick={() => navigate('/products')} type="button">All Bars</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditPage;