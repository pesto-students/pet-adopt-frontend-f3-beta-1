import React from "react";
import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";
import testimonialConstant from "../../mock-constant/testimonial-card-constant.json";
import styles from "./TestimonialSection.module.css";
import { Row } from "react-bootstrap";

function TestimonialSection() {
 const testimonial = testimonialConstant["testimonialCard"].map(
   ({ name, url, desc }) => (
     <TestimonialCard name={name} url={url} desc={desc} />
   )
 );

  return (
    <div>
      <div className={styles.grid_container_h1_div}>
        <h2 className={styles.grid_container_h1}>Testimonials</h2>
      </div>
      <Row className={styles.grid_container}>{testimonial}</Row>
    </div>
  );
}

export default TestimonialSection;
