import React from "react";
import { fetchPetDetails } from "../../store/slices/AddPetSlice";
import { useDispatch } from "react-redux";


function DisplayPetDetails() {

    const dispatch = useDispatch();
    const displayPet = (event) =>{
        event.preventDefault()
        dispatch(fetchPetDetails)
        .then(data=>console.log(data))
    }

  return (
    <form method="GET">
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <button onClick={displayPet}>Submit</button>
          </div>
          <div className="col-lg-5">
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default DisplayPetDetails;
