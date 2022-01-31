import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { Carousel } from "react-bootstrap"
import styles from "./PetDetails.module.css"
import { handleLike, handleUnLike } from "../../store/slices/PetInDetailSlice"
import { sendRequest } from "../../store/slices/AddPetSlice";
import { Button } from "react-bootstrap"
import RespondCard from "../common/RespondCard/RespondCard";
import { Row } from "react-bootstrap";
import axios from "axios";

 
function PetDetails() {
  const [displayResquest,setDisplayResquest] = useState(false);
  const state = useSelector(state=>state.petInDetail)
  const userState = useSelector(state=>state.loggedInUserDetails)
  const dispatch = useDispatch()
  const [ownerData, setOwnerData] = useState({})

  async function FetchNameLocation() {
    const res = axios({
      method: "get",
      // url: "https://petpalbackend.herokuapp.com/logout",
      url: `/username/${state.userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  useEffect(() => {
    FetchNameLocation().then(data => {
      setOwnerData(data.data[0]);
    })
    // eslint-disable-next-line
  },[])


  const handleLikeButton = () => {
    dispatch(handleLike({_id: state._id,userId: userState._id}))
  }

  const handleUnLikeButton = () => {
    dispatch(handleUnLike({_id: state._id,userId: userState._id}))
  }

  function userExists(uid) {
    return state.likes.some(function(el) {
      return el.userId === uid;
    }); 
  }

  const handleSendRequest = async () => {
    dispatch(sendRequest({_id:state._id,userId:userState._id}))
    // .then(() =>{
    //   dispatch(petInDetail(_id))
    //  .then(data =>navigate("/petindetail"))
    // })
    // .then(data => {
    //   console.log(data)
    //   navigate("/petindetail")
    //   })
    .catch(err => console.log(err));
  }

  const handleShowRequests = () => {
    setDisplayResquest(!displayResquest);
  }

  const RequestButton = () => {
    console.log(state.userId,userState._id);
    const buttonText = `${state.requests.length} Request${state.requests.length>1 && "s"}`
    if(state.userId===userState._id){
      return <Button onClick={handleShowRequests}>{ displayResquest ? "Show About" : buttonText  }</Button>
    }
    else if(userExists(userState._id)){
      return <Button>Request Sent</Button>
    }
    else{
      return <Button onClick={handleSendRequest}>Send Request</Button>      
    }
  }

  const AboutPart = () => {
    return (
    <div className={styles.detailsDivStyles}>
    <div className={styles.aboutH1Styles}>About</div>
    <p>
      {state.about}
    </p>
  </div>);
  }

  const RequestPart = () => {
    return (
      <>
      <div className={styles.grid_container_h1_div}>
        <div className={styles.grid_container_h1}>Requests</div>
      </div>
      <Row className={styles.grid_container}>
        {state.requests.map(user =><RespondCard petId={state._id} userId={user.userId} status={user.requestStatus} />)}
      </Row>
      </>
    )
  }

  return (
    <>
      <div style={{marginTop:"10px", textAlign:"center"}}><h1>{state.petname}</h1></div>
      <div>
          <Carousel className="pet-carousel">
          {state.petimages.length ? state.petimages.map(image =>{ return (
            <Carousel.Item>
              <img
                className="-block w-100"
                src={"/images/" + image.image}
                alt="First slide"
                loading="lazy"
              />
            </Carousel.Item>
          );}) : null}           
        </Carousel>
      </div>
      <div className={styles.detailsDivStyles}>
        <span className={styles.details} >{state.petcategory}</span>
        <span className={styles.details}>{state.selectedPet}</span>
        <span className={styles.details}>{state.gender}</span>
        <span className={styles.details}>{state.size}</span>
        <span className={styles.details}>Age {state.age}</span>
        {userExists(userState._id) ? <span onClick={handleUnLikeButton} className={styles.numberOfLikes}>💖</span> : <span onClick={handleLikeButton} className={styles.numberOfLikes}>💛<i class="far fa-heart"></i></span>}
        <span className={styles.numberOfLikes}>{state.likes.length}</span>
      </div>
      {displayResquest ? RequestPart() : AboutPart()}
      <div className={styles.detailsDivStyles}>
        <span className={styles.details}>₹{state.adoptionFee}</span>
        <span className={styles.details}>{ownerData.location}</span>
        <RequestButton />
      </div>
      <div className={styles.detailsDivStyles}>
        <span className={styles.details}>Owner: {ownerData.name}</span>
      </div>      
    </>
  );
}

export default PetDetails;
