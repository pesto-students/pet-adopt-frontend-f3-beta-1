import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Carousel } from "react-bootstrap"
import styles from "./PetDetails.module.css"
import { handleLike, handleUnLike } from "../../store/slices/PetInDetailSlice"
 
function PetDetails() {
  const state = useSelector(state=>state.petInDetail)
  const userState = useSelector(state=>state.loggedInUserDetails)
  const dispatch = useDispatch()

  const handleLikeButton = () => {
    console.log(state._id,userState._id);
    dispatch(handleLike({_id: state._id,userId: userState._id}))
  }

  const handleUnLikeButton = () => {
    console.log(state._id,userState._id);
    dispatch(handleUnLike({_id: state._id,userId: userState._id}))
  }

  function userExists(uid) {
    return state.likes.some(function(el) {
      return el.userId === uid;
    }); 
  }

  return (
    <>
      <div style={{marginTop:"10px", textAlign:"center"}}><h1>{state.petname}</h1></div>
      <div>
          <Carousel className="pet-carousel">
          {state.petimages.length ? state.petimages.map(image =>{ return (  
            <Carousel.Item >
              <img
                className="-block w-100"
                src={"/images/"+image.image}
                alt="First slide"
              />
            </Carousel.Item>
          )}) : null}           
        </Carousel>
      </div>
      <div className={styles.detailsDivStyles}>
        <span className={styles.details} >{state.petcategory}</span>
        <span className={styles.details}>{state.selectedPet}</span>
        <span className={styles.details}>{state.gender}</span>
        <span className={styles.details}>{state.size}</span>
        <span className={styles.details}>Age {state.age}</span>
        {userExists(userState._id) ? <span onClick={handleUnLikeButton} className={styles.numberOfLikes}>💖</span> : <span onClick={handleLikeButton} className={styles.numberOfLikes}>💛</span>}
        <span className={styles.numberOfLikes}>{state.likes.length}</span>
      </div>
      <div className={styles.detailsDivStyles}>
        <p>
          {state.about}
        </p>
      </div>
      <div className={styles.detailsDivStyles}>
        <span className={styles.details}>₹{state.adoptionFee}</span>
        <span className={styles.details}>{userState.location}</span>
        <span className={styles.details}>{state.location}</span>
      </div>
      <div className={styles.detailsDivStyles}>
        <span className={styles.details}>Owner: {userState.name}</span>
      </div>      
    </>
  );
}

export default PetDetails;
