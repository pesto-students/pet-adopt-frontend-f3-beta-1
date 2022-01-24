import React from 'react'
import Navigation1 from './Navigation1'

function Header({handleLoginShow,handleSignUpShow}) {
    return (<>
        {/* <Navigation /> */}
        <Navigation1 
          handleLoginShow ={handleLoginShow}
          handleSignUpShow = {handleSignUpShow}
        />
        {/* <CarouselPics /> */}
        
    </>)
}

export default Header
