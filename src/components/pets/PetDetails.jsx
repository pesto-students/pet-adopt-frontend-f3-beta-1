import React from "react";
import { useSelector } from "react-redux"
import { Carousel } from "react-bootstrap"
 
function PetDetails() {
  const state = useSelector(state=>state.petInDetail)
  console.log(state.petimages[0].image);

  return (
    <>
      <div>
          <Carousel className="my-carousel">
          {state.petimages.length ? state.petimages.map(image =>{ return (  
            <Carousel.Item >
              <img
                className="c-block w-100"
                src={"/images/"+image.image}
                alt="First slide"
              />
            </Carousel.Item>
          )}) : null}           
        </Carousel>
      </div>
      <span>{state.petname}</span>
      <span>{state.selectedPet}</span>
      <span>{state.gender}</span>
        <p>
          {state.about}
        </p>
            <span>{state.adoptionFee}</span>
      
        </>
  );
}

export default PetDetails;
