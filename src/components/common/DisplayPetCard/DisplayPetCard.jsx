import React from "react";
import styles from "./DisplayPetCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../../../store/slices/AddPetSlice";
import { petInDetail } from "../../../store/slices/PetInDetailSlice";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

// import {loggedInUser} from "../../../store/slices/LoggedInUserDataSlice"

function DisplayPetCard({
  userId,
  _id,
  about,
  petname,
  petimages = [{ image: "" }],
  requests = [],
  selectedPet,
  adoptionFee,
  gender,
}) {
  console.log(requests);
  const imageKey = petimages.length
    ? "/images/" + petimages[0].image
    : "https://i.stack.imgur.com/mwFzF.png";
  const state = useSelector((state) => state.loggedInUserDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePetClick = async () => {
    window.alert("PetClicked " + _id);
    dispatch(petInDetail(_id)).then((data) => navigate(`/petindetail/${_id}`));
  };

  const handleSendRequest = async () => {
    window.alert("PetClicked " + _id);
    dispatch(sendRequest({ _id, userId: state._id }))
      .then(() => {
        dispatch(petInDetail(_id)).then((data) =>
          navigate(`/petindetail/${_id}`)
        );
      })
      // .then(data => {
      //   console.log(data)
      //   navigate("/petindetail")
      //   })
      .catch((err) => console.log(err));
  };

  function userExists(uid) {
    return requests.some(function (el) {
      return el.userId === uid;
    });
  }

  const RequestButton = () => {
    console.log(userId, state._id);
    if (userId === state._id) {
      return (
        <Button>
          {requests.length} Request{requests.length > 1 ? "s" : null}
        </Button>
      );
    } else if (userExists(state._id)) {
      return <Button>Request Sent</Button>;
    } else {
      return <Button onClick={handleSendRequest}>Send Request</Button>;
    }
  };

  const aboutTrim = about.slice(0, 70) + "...";
  return (
    <Card key={_id} className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <div style={{ display: "flex" }}>
          <div onClick={handlePetClick} className={styles.card_image}>
            <img
              className={styles.card_image}
              src={imageKey}
              alt="pet"
              loading="lazy"
            />
          </div>
          <div className={styles.card_details}>
            <div className={styles.card_title}>
              <span className={styles.card_title_name}>{petname.toUpperCase()}</span>
            </div>
            <div className={styles.card_paragraph}>
              <p>{aboutTrim}</p>
              <span className={styles.card_title_breed}>{selectedPet}</span>              
            </div>
            <div className={styles.card_footer}>
              <span className={styles.card_footer_amount}>₹{adoptionFee}</span>
              <span className={styles.card_title_gender}>{gender}</span>
              <span className={styles.card_footer_send_request}>
                <RequestButton />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DisplayPetCard;
