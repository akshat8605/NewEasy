import React from 'react';
import facebooklogo from './Facebooklogo.png';
import instagramLogo from './Instagramlogo.png';


function BottomNavigation() {
  return (
    < div className='ba flex center'>
        <p className='u b grow  ma4 pointer'>Contact us</p>
        <p className='u b grow ma4 pointer'>Email </p>
        <p className='u b grow  ma4 pointer'>About </p>
        <img alt='facebook' className= 'ma4 grow pointer' src={facebooklogo} width='30px' height='30px'/>
        <img alt='facebook' className= 'ma4 grow pointer' src={instagramLogo} width='30px' height='30px'/>
    </div>


  );
}

export default BottomNavigation;
