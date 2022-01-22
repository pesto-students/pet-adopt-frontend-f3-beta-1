import React from "react";
import MostLikedCard from "../../common/MostLikedCard/MostLikedCard";
import styles from "./MostLikedPets.module.css";
import { Row } from "react-bootstrap";

function MostLikedPets() {
  return (
    <div>
      <h2>MostLikedCard</h2>
      <Row className={styles.grid_container}>
        <MostLikedCard />
        <MostLikedCard />
        <MostLikedCard />
      </Row>
    </div>
  );
}

export default MostLikedPets;
