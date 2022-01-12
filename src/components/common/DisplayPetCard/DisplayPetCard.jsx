import React from "react";
import styles from "./DisplayPetCard.module.css";

function DisplayPetCard({about,petname,petimages=[{image:''}],size,age,selectedPet,adoptionFee,gender}) {
  console.log(about,petimages,petname,size,age,selectedPet,adoptionFee,gender);
  return (
    <card className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <div style={{ display: "flex" }}>
          <div className={styles.card_image}>
            <img
              className={styles.card_image}
              src={"/images/"+petimages[0].image}
              alt="pet"
            />
          </div>
          <div className={styles.card_details}>
            <div className={styles.card_title}>
              <span className={styles.card_title_name}>{petname}</span>
              <span className={styles.card_title_breed}>{selectedPet}</span>
              <span className={styles.card_title_gender}>{gender}</span>
            </div>
            <div className={styles.card_paragraph}>
              <p>
                {about}
              </p>
            </div>
            <div className={styles.card_footer}>
              <span className={styles.card_footer_amount}>{adoptionFee}</span>
              <span className={styles.card_footer_send_request}>
                <span>Send Request</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}

export default DisplayPetCard;
