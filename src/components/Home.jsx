import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {loggedInUser} from '../store/slices/LoggedInUserDataSlice'


function PetDetails() {
  const [user,setUser] = useState({})
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(true);

  const callHomePage = async () => {
    setMounted(true);
    await dispatch(loggedInUser())
    .then(data=>{
      console.log(data,"data");
      if(mounted){
        setUser(data.payload);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() =>{
    callHomePage();
    return ()=>{setMounted(false);}
    // eslint-disable-next-line
  },[])

  return (
    <>
    <form method="GET">
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Dashboard</h1>
            <h1>Welcome {user.name}</h1>
          </div>
        </div>
      </div>
    </div>
    </form>
    {/* <DisplayAllPets /> */}
    </>
  );
}

export default PetDetails;
