import React from "react";
import styles from "./DisplayPetCard.module.css";

function DisplayPetCard() {
  return (
    <card className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <div style={{ display: "flex" }}>
          <div className={styles.card_image}>
            <img
              className={styles.card_image}
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
              alt="pet"
            />
          </div>
          <div>
            <div>
              <span>Name</span>
              <span>Breed</span>
              <span>Gender</span>
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}

export default DisplayPetCard;
