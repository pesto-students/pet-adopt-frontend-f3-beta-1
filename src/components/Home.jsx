import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../store/slices/LoggedInUserDataSlice";
import { fetchAllPetDetails } from "../store/slices/AddPetSlice"
import PopularCategory from "./pets/PopularCategory/PopularCategory";
import MostLikedPets from "./pets/MostLikedPets/MostLikedPets";
import TestimonialSection from "./pets/TestimonialSection/TestimonialSection";
import CorouselPics from "./shared/CarouselPics";
import styles from "./Home.module.css";

function PetDetails() {
  const dispatch = useDispatch();

  const checkUser = async () => {
    dispatch(loggedInUser())

    .then(data => {dispatch(fetchAllPetDetails())})
  };
  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CorouselPics />
      <div className={styles.grid_container}>
        <PopularCategory />
        <MostLikedPets />
        <TestimonialSection />
      </div>
    </>
  );
}

export default PetDetails;
