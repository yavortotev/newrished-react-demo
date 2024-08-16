import { Link, useNavigate, useParams } from "react-router-dom";

import { useDeleteBar, useGetOneBarById } from "../../hooks/useBars.js"

import { useAuthContext } from "../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import comsntsApi from "../../api/comsnts-api.js";

import "./Details.css"




const Details = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [bar, setBars] = useGetOneBarById(id)
  const [openPopUp, setopenPopUp] = useState(false)
  const { userId, email, isAuthenticated } = useAuthContext()
  const isOwner = userId === bar._ownerId
  const [allComments, setAllComment] = useState([])
  const [comment, setNewComment] = useState()



  useEffect(() => {
    //TODO novo

    const fetchComntsData = async () => {
      const coments = await comsntsApi.getAllComents(id)
      console.log(coments)
      setAllComment(coments)
    }
    fetchComntsData()

  }, [])

  const name = email?.split('@')[0]

  function togglePopUP(e) {
    e.preventDefault()

    setopenPopUp(true)
  }

  const barDeleteHandler = async () => {

    try {

      await useDeleteBar(id);
      navigate('/products');

    } catch (err) {

      throw new Error(err.message);

    }
  }

  const barCancelHandler = () => {

    setopenPopUp(false)
    return
  }

  const commentSubmitHandler = async (e) => {
    e.preventDefault()

    await comsntsApi.create(id, comment)


    const coments = await comsntsApi.getAllComents(id)
    console.log(coments)
    setAllComment(coments)
    setNewComment("")


  }

  return (
    <>    <div className={'owner-background'}>
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">{bar.flavor}</p>
          <div id="img-wrapper">
            <img src={bar.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p>Ptotein: <span id="details-brand">{bar.protein}</span></p>
            <p>
              Carbs: <span id="details-model">{bar.carbs}</span>
            </p>

            <p>Fats: <span id="details-designer">{bar.fats}</span></p>
            <p>Weight: <span id="details-value">{bar.weight}</span></p>
          </div>

         
          
            <div id="action-buttons">
            <a onClick={() => navigate('/products')}>All Bars</a>
            {isOwner && (
              <>
              <Link to={`/products/${id}/edit`} id="edit-btn">Edit</Link>
              <a href="" onClick={togglePopUP} id="delete-btn">Delete</a>
              
              <a   onClick={() => navigate('/createbar')}>Create  Bar</a>
              <div className='is-owner-deskr'>
                Custom-Made Just for You, <span className='single-bar-name'>{name}</span>!
              </div>
              </>
            )}
            </div>

         

          {openPopUp && (
            <div className="pop-up-wrapper">

              <p>Are you sure you want to delete the {bar.flavor} protein bar?</p>
              <div className="pop-up-btns">
                <button onClick={barDeleteHandler}>OK</button>
                <button onClick={barCancelHandler}>Cancel</button>

              </div>
            </div>
          )}

        </div>

      </section>

      <article className="create-comment">

          {isAuthenticated
            ? <form className="form" onSubmit={commentSubmitHandler}>

              <label>Add new comment:</label>

              <input
                type="text"
                hidden
                name="gameId"
                onChange={(e) => setUsername(e.target.value)}
                value={id}

              />

              <textarea
                name="comment"
                placeholder="Comment..."
                onChange={(e) => setNewComment(e.target.value)}
                value={comment}
              />


              <div>
                <button className="btn submit buttonsss" type="submit"  >Add Comment </button>
              </div>

            </form>

            : ""
          }

        </article>
        
        
         </div>
    <ul className="form comment" >
    <h1 >Comments :</h1> 
    
    
    {allComments.map(c => {
      return (<li key={c._id}>
        <div>{c.comment}</div>
      </li>)
    })}
     {allComments.length ===0 
  ? <h2>'No comments yet!'</h2>
: ""
}
  </ul>
  </>


  )
};

export default Details;