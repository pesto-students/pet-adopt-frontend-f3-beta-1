import React from "react";
import styles from "./MostLikedCard.module.css";
import { Col } from "react-bootstrap";

function MostLikedCard({ mostLiked }) {
  let imageKey = mostLiked.petimages
    ? mostLiked.petimages[0].image
    : "1309b1565d06708b4a1660de6d7078de";

  return (
    <Col xs={12} md={4}>
      <div>
        <img className={styles.card} src={"/images/" + imageKey} alt="pet" />
        <div>
          <div className={styles.card_title}>
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
