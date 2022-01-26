import React from "react";
import { Button } from "react-bootstrap";
import styles from "./RespondCard.module.css";
import { Col } from "react-bootstrap";

function RespondCard({userId,status}) {
  return (
    <Col xs={12} md={6}>
    <div className={styles.respondcard__container}>
      <div className={styles.respondcard__inner_container}>
        <img
          className={styles.respondcard__container_image}
          src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="RespondCard"
        />
        <div className={styles.respondcard__container_text_content}>
          <div className={styles.respondcard__container_text_name}>
            Owner Name 
          </div>
          <div className={styles.respondcard__container_text_location}>
            Location
          </div>
          <Button className={styles.respondcard__container_button}>
            {status ? "Responded" : "Respond"}
          </Button>
        </div>
      </div>
    </div>
    </Col>
  );
}

export default RespondCard;
