import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  const [user,setUser] = useState({})

  const callHomePage = async () => {
    try{
      const res = await fetch("/dashboard",{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUser(data);
      if(res.status!==200 || !data){
        const error = new Error(res.error);
        throw error;
      }
    }    
    catch(e){
      console.log(e);
      navigate('/login')
    }
  }

  useEffect(() =>{
    callHomePage();    
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
