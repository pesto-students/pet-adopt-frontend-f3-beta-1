import React from "react";
import DisplayPetDetails from "./pets/DisplayPetDetails"
import CorouselPics from "./shared/CarouselPics"

function About() {
  return (<>
    <CorouselPics />
    <DisplayPetDetails />    
    </>
  );
}

export default About;
