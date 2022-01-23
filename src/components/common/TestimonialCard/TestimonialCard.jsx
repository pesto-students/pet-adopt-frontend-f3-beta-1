import React from "react";
import styles from "./TestimonialCard.module.css";
import { Rating } from "react-simple-star-rating";
import { Col } from "react-bootstrap";

function TestimonialCard() {
  return (
    <Col xs={12} md={6}>
      <div className={styles.testimonial_card_container}>
        <div className={styles.testimonial_card_container_content}>
          <div className={styles.testimonial_card_container_content_text}>
            <div
              className={styles.testimonial_card_container_content_paragraph}
            >
              PetPal is such an app where i have found my pet.
            </div>
            <div className={styles.testimonial_card_container_content_author}>
              Jason P
            </div>
            <div
              className={
                styles.testimonial_card_container_content_author_rating
              }
            >
              <Rating size={25} ratingValue={100} />
            </div>
          </div>
          <div>
            <img
              className={styles.testimonial_card_container_content_img}
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            />
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TestimonialCard;
