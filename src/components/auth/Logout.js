import React,{ useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


function Logout() {
    const navigate = useNavigate();
    const callLogoutPage = async () =>{
        try{
            const res = await fetch("/logout",{
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              credentials: "include",
            });
            const data = await res.json();
            if(data){
                navigate('/home');
            }
            if(data.status!==200){
                navigate('/home');
            }
          }    
          catch(e){
            console.log(e);
            navigate('/home')
          }
        }
      
        useEffect(() =>{
            callLogoutPage();
            // eslint-disable-next-line
        },[])
    return (
        <>
            <h1>Successfully Logged out!!!</h1>
        </>
    )
}

export default Logout
