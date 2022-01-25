import React from 'react'
import Navigation1 from './Navigation1'

function Header({handleLoginShow,handleSignUpShow,auth}) {
    return (
    <>
      <Navigation1 
        handleLoginShow ={handleLoginShow}
        handleSignUpShow = {handleSignUpShow}
        auth = {auth}
      />
    </>)
}

export default Header
