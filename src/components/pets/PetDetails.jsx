import React from "react";
import { useSelector } from "react-redux"
 
function PetDetails() {
  const state = useSelector(state=>state.petInDetail)
  console.log(state);

  return (<><img
        src={"/images/"}
        alt="pet"
          />
      {/* <span>{petname}</span>
      <span>{selectedPet}</span>
      <span>{gender}</span>
        <p>
          {about}
        </p>
            <span>{adoptionFee}</span> */}
      
        </>
  );
}

export default PetDetails;
