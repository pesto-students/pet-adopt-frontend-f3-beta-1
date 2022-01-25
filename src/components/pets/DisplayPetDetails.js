import React,{ useEffect, useState } from "react";
import { fetchPetDetails } from "../../store/slices/MyPetsSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import DisplayPetCard from "../../components/common/DisplayPetCard/DisplayPetCard"
import { useSelector } from 'react-redux';

function DisplayPetDetails() {
  const navigate = useNavigate();
  const [pets,setPets] = useState([])
  const dispatch = useDispatch();
  const state = useSelector(state=>state.loggedInUserDetails);
  console.log(state);

  const callPetDetailPage = async () => {   
    await dispatch(fetchPetDetails(state._id))
    .then(data=>{
      console.log(data.payload)
      setPets(data.payload);
    })
    .catch(err=>{console.log(err);
      navigate('/home')})   
  }

  useEffect(() =>{
    callPetDetailPage();
    // eslint-disable-next-line
  },[]);

  return (
    <>
      {pets.map(pet => <DisplayPetCard {...pet}  />)}  
    </>
  );
}

export default DisplayPetDetails;
