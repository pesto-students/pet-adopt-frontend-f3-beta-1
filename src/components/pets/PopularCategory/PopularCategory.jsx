import React from "react";
import PopularCategoryCard from "../../common/PopularCategoryCard/PopularCategoryCard";
import { Row } from "react-bootstrap";
import styles from "./PopularCategory.module.css";
function PopularCategory() {
  return (
    <div className={styles.grid_container}>
      <h2 className={styles.grid_container_h1}>Popular Categories</h2>
      <Row className={styles.grid_container}>
        <PopularCategoryCard /> <PopularCategoryCard /> <PopularCategoryCard />
        <PopularCategoryCard /> <PopularCategoryCard /> <PopularCategoryCard />
        <PopularCategoryCard /> <PopularCategoryCard /> <PopularCategoryCard />
      </Row>
    </div>
  );
}

export default PopularCategory;
