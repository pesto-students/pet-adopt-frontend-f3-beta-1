import React, { useState, useEffect } from "react";
import styles from "./DisplayPetRequestCard.module.css";
import axios from "axios"
import { Card } from "react-bootstrap";


// import {loggedInUser} from "../../../store/slices/LoggedInUserDataSlice"

function DisplayPetRequestCard({userId, petId}) {
  const [pet, setPet] = useState({})
  const imageKey = pet.petimages ? pet.petimages[0].image : "";
  const [userFlag, setUserFlag] = useState(false)
  const [userData, setUserData] = useState({})

  async function FetchPetDetails(userId, petId) {
    console.log(userId, petId);
    const res = await axios({
      method: "post",
      url: "/petindetails",
      headers: {
        "Content-Type": "application/json",
      },
      data: {userId, petId},
    });
    return res;
  }

  useEffect(() => {
    FetchPetDetails(userId, petId)
    .then((data) => {
      console.log(data.data);
      if(data.data.status){
        setPet(data.data.petDetails);
        setUserData(data.data.user)
        setUserFlag(true)
      }
      else{
        setPet(data.data.petDetails);
        setUserFlag(false)
      }
    }
    )
    // eslint-disable-next-line
  },[])
  
  return (
    <Card key={petId} className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <div style={{ display: "flex" }}>
          <div className={styles.card_image}>
            <img
              className={styles.card_image}
              src={"/images/" + imageKey}
              alt="pet"
              loading="lazy"
            />
          </div>
          <div className={styles.card_details}>
            <div className={styles.card_title}>
              <span className={styles.card_title_name}>{pet.petname}</span>
              <span className={styles.card_title_breed}>{pet.selectedPet}</span>
              <span className={styles.card_title_gender}>{pet.gender}</span>
            </div>
            <div className={styles.card_paragraph}>
              <span>
                {userFlag ? (
                  <span>
                    {userData.name} {userData.phone}{" "}
                  </span>
                ) : (
                  "owner still not responded!!!"
                )}
              </span>
            </div>
            <div className={styles.card_footer}>
              <span className={styles.card_footer_amount}>
                {pet.adoptionFee}
              </span>
              <span className={styles.card_footer_send_request}></span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DisplayPetRequestCard;
