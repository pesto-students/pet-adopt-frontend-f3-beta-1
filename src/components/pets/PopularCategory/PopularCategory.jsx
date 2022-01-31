import React from "react";
import PopularCategoryCard from "../../common/PopularCategoryCard/PopularCategoryCard";
import { Row } from "react-bootstrap";
import styles from "./PopularCategory.module.css";
import PetCategory from "../../mock-constant/pet-category-images.json"

function PopularCategory() {
  let list = PetCategory["PetCategoryImage"].map((item, index) => (
    <PopularCategoryCard
      category = {item.name}
      url = {item.url}
      key = { item }
    />
  ));
  return (
    <div className={styles.grid_container}>
      <h2 className={styles.grid_container_h1}>Popular Categories</h2>
      <Row className={styles.grid_container}>
        {list}
      </Row>
    </div>
  );
}

export default PopularCategory;
