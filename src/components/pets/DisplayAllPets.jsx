import React,{ useEffect, useState } from "react";
import { fetchAllPetDetails } from "../../store/slices/AddPetSlice";
import { useDispatch } from "react-redux";
import DisplayPetCard from "../../components/common/DisplayPetCard/DisplayPetCard"

function DisplayPetDetails() {
  const [pets,setPets] = useState([])
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(true);

  const callPetDetailPage = async () => {
    console.log("all pets details")
    setMounted(true);
    await dispatch(fetchAllPetDetails())
    .then(data=>{
      console.log(data.payload)
      if(mounted){
        setPets(data.payload);
      }
    })
    .catch(err=>console.log(err))
  }

  useEffect(() =>{
    console.log("About page called");
    callPetDetailPage();
    return () => {setMounted(false)};
    // eslint-disable-next-line
  },[]);

  return (
    <div>
      {pets.map(pet =>{ return <DisplayPetCard
      key={pet._id}
      {...pet}
      />})}  
    </div>
  );
}

export default DisplayPetDetails;
