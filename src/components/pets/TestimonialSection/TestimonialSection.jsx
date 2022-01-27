import React from "react";
import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";
import styles from "./TestimonialSection.module.css";
import { Row } from "react-bootstrap";

function TestimonialSection() {
  return (
    <div>
      <div className={styles.grid_container_h1_div}>
        <h2 className={styles.grid_container_h1}>Testimonials</h2>
      </div>
      <Row className={styles.grid_container}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Row>
    </div>
  );
}

export default TestimonialSection;
