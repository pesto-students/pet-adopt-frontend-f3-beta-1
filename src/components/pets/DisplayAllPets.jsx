import React,{ useEffect, useState } from "react";
import { fetchAllPetDetails } from "../../store/slices/AddPetSlice";
import { useDispatch } from "react-redux";
import DisplayPetCard from "../../components/common/DisplayPetCard/DisplayPetCard"
import { useParams } from "react-router-dom"

function DisplayPetDetails() {
  const [pets,setPets] = useState([])
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.category);

  const callPetDetailPage = async () => {
    console.log("all pets details")
    await dispatch(fetchAllPetDetails())
    .then(data=>{
      console.log(data.payload)
      setPets(data.payload);
    })
    .catch(err=>console.log(err))
  }

  useEffect(() =>{
    console.log("About page called");
    callPetDetailPage();
    return () => {};
    // eslint-disable-next-line
  },[]);
  const petCategory = pets.filter(data => data.petcategory === params.category)
  console.log(petCategory);

  return (
    <div>
      {}
      {petCategory.map(pet =>{ return <DisplayPetCard
      key={pet._id}
      {...pet}
      />})}  
    </div>
  );
}

export default DisplayPetDetails;
