import React from "react";
import MostLikedCard from "../../common/MostLikedCard/MostLikedCard";
import styles from "./MostLikedPets.module.css";
import { Row } from "react-bootstrap";

function MostLikedPets() {
  return (
    <div>
      <div className={styles.grid_container_h1}>
        <h2>MostLikedCard</h2>
      </div>
      <Row className={styles.grid_container}>
        <MostLikedCard />
        <MostLikedCard />
        <MostLikedCard />
      </Row>
    </div>
  );
}

export default MostLikedPets;
