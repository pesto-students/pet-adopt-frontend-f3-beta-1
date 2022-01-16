import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {loggedInUser} from '../store/slices/LoggedInUserDataSlice'


function Home() {
  const navigate = useNavigate();
  const [user,setUser] = useState({})
  const dispatch = useDispatch();


  const callHomePage = async () => {
    await dispatch(loggedInUser())
    .then(data=>{
      console.log(data,"data");
      setUser(data.payload);
    })
    .catch(err => {
      console.log(err);
      navigate("/login");
    })
  }

  useEffect(() =>{
    callHomePage();
    // eslint-disable-next-line
  },[])

  return (
    <form method="GET">
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Dashboard</h1>
            <h1>Welcome {user.name}</h1>            
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Home;
