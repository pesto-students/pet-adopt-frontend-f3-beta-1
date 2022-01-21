import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../store/slices/LoggedInUserDataSlice";
import PopularCategory from "./pets/PopularCategory/PopularCategory";

function PetDetails() {
  const dispatch = useDispatch();

  const callHomePage = async () => {
    await dispatch(loggedInUser())
      .then((data) => {
        console.log(data, "data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callHomePage();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PopularCategory />
      {/* <DisplayAllPets /> */}
    </>
  );
}

export default PetDetails;
