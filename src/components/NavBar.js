import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const NavBar = () => {

  return (

    <div className='container' style={{height:"100px", background:"linear-gradient(to right, blue , red)"}}>
        <div className="row h-100 justify-content-center align-items-center">
            <h1 className='text-white text-center'>
                <TypewriterComponent
                    options={{
                        strings: ['CALCULADORA IMC', 'VERSIÓN 1.0'],
                        autoStart: true,
                        loop: true,
                }}
                />
            </h1>
        </div>
    </div>
    
       
  )
}

export default NavBar
