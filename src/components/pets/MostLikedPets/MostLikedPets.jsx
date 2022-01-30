import React from "react";
import MostLikedCard from "../../common/MostLikedCard/MostLikedCard";
import styles from "./MostLikedPets.module.css";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux"

function MostLikedPets() {
  const state = useSelector(state=>state.petDetail)
  console.log(state,"state");
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const A = a.likes.length;
    const B = b.likes.length;
    // console.log(bandA,bandB);
    if (A > B) return 1;
    if (B > A) return -1;
  }

  // const sortState = state.sort((a, b) => a.likes.length - b.likes.length)
  if(state.length!==0){
    console.log(state[0].sort(compare),"After sorting");
  }
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
