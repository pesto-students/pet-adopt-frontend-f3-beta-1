import React from "react";
import styles from "./TestimonialCard.module.css";
import { Rating } from "react-simple-star-rating";
import { Col } from "react-bootstrap";

function TestimonialCard({name,url,desc}) {
  return (
    <Col xs={12} md={6}>
      <div className={styles.testimonial_card_container}>
        <div className={styles.testimonial_card_container_content}>
          <div className={styles.testimonial_card_container_content_text}>
            <div
              className={styles.testimonial_card_container_content_paragraph}
            >
              {desc}
            </div>
            <div className={styles.testimonial_card_container_content_author}>
              {name}
            </div>
            <div
              className={
                styles.testimonial_card_container_content_author_rating
              }
            >
              <Rating size={25} readonly={true} ratingValue={100} />
            </div>
          </div>
          <div>
            <img
              className={styles.testimonial_card_container_content_img}
              src={url}
              alt="Testimonial Card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TestimonialCard;
