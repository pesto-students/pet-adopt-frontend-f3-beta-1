import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselPics() {
  return (
    <>
      <Carousel className="my-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 img-container"
            src="https://www.owntheyard.com/wp-content/uploads/2019/10/puppy.jpg"
            alt="First slide"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thesprucepets.com/thmb/VtqqdYnQ6eKo0VRAGWd56W_jELA=/3120x2340/smart/filters:no_upscale()/red-eared-slider--trachemys-scripta-elegans--standing-on-wood--texas--usa-980454648-6abd20d07aa541679c70e47dd15144ee.jpg"
            alt="Second slide"
            loading="lazy"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
            loading="lazy"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselPics;
