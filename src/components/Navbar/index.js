import React from 'react'
import { NavbarWrapper } from './style'
import Yog from '../../images/YogAi.jpeg';

export const Navbar = () => {
  return (
    <NavbarWrapper>
        <div className='navbar-wrapper'><img src={Yog} alt=""/> <div className='right-content'><span>Features</span><span>Poses</span></div></div>
    </NavbarWrapper>
  )
}
