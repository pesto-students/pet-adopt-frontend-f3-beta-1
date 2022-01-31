import React from "react";
import styles from "./MostLikedCard.module.css";
import { Col } from "react-bootstrap";

function MostLikedCard({ mostLiked }) {
  let imageKey = mostLiked.petimages
    ? mostLiked.petimages[0].image
    : "";

  return (
    <Col xs={12} md={4}>
      <div class={styles.container}>
        <img className={styles.card} src={"/images/" + imageKey} alt="pet" />
        <div>
          <div className={styles.card_title_centered}>
            {mostLiked.selectedPet || "German "}
          </div>
          <div className={styles.card_title_paragraph}>
            {mostLiked.about || "lorem ipsum"}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default MostLikedCard;
