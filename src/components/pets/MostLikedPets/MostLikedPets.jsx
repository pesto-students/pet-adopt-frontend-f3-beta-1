import React from "react";
import MostLikedCard from "../../common/MostLikedCard/MostLikedCard";
import styles from "./MostLikedPets.module.css";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function MostLikedPets() {
  const state = useSelector((state) => state.petDetail);
  let mostLikedState = [...state].sort(compare);

  function compare(a, b) {
    const A = a.likes.length;
    const B = b.likes.length;
    if (A > B) return -1;
    if (B > A) return 1;
  }

  return (
    <div>
      <div className={styles.grid_container_h1}>
        <h2>Most Liked Pets</h2>
      </div>
      <Row className={styles.grid_container}>
        <MostLikedCard mostLiked={mostLikedState[0] || "mostLiked"} />
        <MostLikedCard mostLiked={mostLikedState[1] || "mostLiked"} />
        <MostLikedCard mostLiked={mostLikedState[2] || "mostLiked"} />
      </Row>
    </div>
  );
}

export default MostLikedPets;
