import React from "react";
import styles from "./PopularCategoryCard.module.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PopularCategoryCard({ category, url }) {
  return (
    <Col xs={12} md={4}>
      <Link to={`/category/${category}`}>
        <div className={styles.popular_category_card}>
          <div className={styles.popular_category_card_content}>
            <img className={styles.popular_category_card_image} src={url} alt="" />
            <div>
              <div className={styles.popular_category_card_title}>
                {category}
              </div>
              <div className={styles.popular_category_card_description}>
                16700 Dogs
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default PopularCategoryCard;
