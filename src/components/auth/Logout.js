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
                navigate('/login');
            }
            if(data.status!==200){
                navigate('/login');
            }
          }    
          catch(e){
            console.log(e);
            navigate('/login')
          }
        }
      
        useEffect(() =>{
            callLogoutPage();    
        },[])
    return (
        <>
            <h1>Successfully Logged out!!!</h1>
        </>
    )
}

export default Logout
