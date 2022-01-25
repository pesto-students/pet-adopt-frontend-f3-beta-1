import React  from "react";

import PopularCategory from "./pets/PopularCategory/PopularCategory";
import MostLikedPets from "./pets/MostLikedPets/MostLikedPets";
import TestimonialSection from './pets/TestimonialSection/TestimonialSection';
import CorouselPics from "./shared/CarouselPics"

function PetDetails() {

  return (
    <>
      <CorouselPics />
      <PopularCategory />
      <MostLikedPets />
      <TestimonialSection />
    </>
  );
}

export default PetDetails;
