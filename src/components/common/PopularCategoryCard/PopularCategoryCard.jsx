import React from "react";
import styles from "./PopularCategoryCard.module.css";
import { Col } from "react-bootstrap";

function PopularCategoryCard() {
  return (
    <Col  xs={12} md={4} >
      <div className={styles.popular_category_card}>
        <div className={styles.popular_category_card_content}>
          <div className={styles.popular_category_card_image}></div>
          <div>
            <div className={styles.popular_category_card_title}>Dog</div>
            <div className={styles.popular_category_card_description}>
              16700 Dogs
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default PopularCategoryCard;
