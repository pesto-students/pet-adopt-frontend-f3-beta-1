import React from "react";
import styles from "./MostLikedCard.module.scss";

function MostLikedCard() {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <div className={styles.card_content}>
            <div className={styles.card_content_inner}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostLikedCard;
