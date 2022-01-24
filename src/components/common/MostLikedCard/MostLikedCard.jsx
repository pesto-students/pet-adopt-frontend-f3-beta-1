import React from "react";
import styles from "./MostLikedCard.module.css";
import { Col } from "react-bootstrap";

function MostLikedCard({
  breedName = "German Sheperd",
  breedDetails = "Personality is aloof but not usually aggressive.",
}) {
  return (
    <Col xs={12} md={4}>
      <div className={styles.card}>
        <div>
          <div className={styles.card_title}>{breedName}</div>
          <div className={styles.card_title_paragraph}>{breedDetails}</div>
        </div>
      </div>
    </Col>
  );
}

export default MostLikedCard;
