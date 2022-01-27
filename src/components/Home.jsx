import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../store/slices/LoggedInUserDataSlice";
import PopularCategory from "./pets/PopularCategory/PopularCategory";
import MostLikedPets from "./pets/MostLikedPets/MostLikedPets";
import TestimonialSection from "./pets/TestimonialSection/TestimonialSection";
import CorouselPics from "./shared/CarouselPics";

function PetDetails() {
  const dispatch = useDispatch();

  const checkUser = async () => {
    dispatch(loggedInUser());
  };
  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CorouselPics />
      <div className="grid_container">
        <PopularCategory />
        <MostLikedPets />
        <TestimonialSection />
      </div>
    </>
  );
}

export default PetDetails;
