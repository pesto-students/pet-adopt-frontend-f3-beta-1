import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "./RespondCard.module.css";
import { Col } from "react-bootstrap";
import axios from "axios"
import { useDispatch } from "react-redux"
import { sendRespond } from "../../../store/slices/PetInDetailSlice"

function RespondCard({petId,userId,status}) {
  const [userData, setUserData] = useState({})
  const dispatch = useDispatch();

  async function FetchNameLocation() {
    const res = axios({
      method: "get",
      // url: "https://petpalbackend.herokuapp.com/logout",
      url: `/username/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  useEffect(() => {
    FetchNameLocation().then(data => {
      console.log(data);
      setUserData(data.data[0]);
    })
    // eslint-disable-next-line
  },[])

  const handleRespondClick = () => {
    dispatch(sendRespond({_id:petId,userId}))
    .then(data =>console.log(status))
  }

  return (
    <Col xs={12} md={6}>
      <div className={styles.respondcard__container}>
        <div className={styles.respondcard__inner_container}>
          <img
            className={styles.respondcard__container_image}
            src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="RespondCard"
            loading="lazy"
          />
          <div className={styles.respondcard__container_text_content}>
            <div className={styles.respondcard__container_text_name}>
              {userData.name}
            </div>
            <div className={styles.respondcard__container_text_location}>
              {userData.location}
            </div>
            <Button
              onClick={handleRespondClick}
              className={styles.respondcard__container_button}
            >
              {status ? "Responded" : "Respond"}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default RespondCard;
