import React, {useEffect, useState} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyled';
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        NavIcon, 
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavItemBtn,
        NavBtnLink} from './Navbar.elements';

const Navbar = ({id}) => {

   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);
   
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   const showButton = () => {
      if(window.innerWidth <= 960){
         setButton(false);
      }else{
         setButton(true);
      }
   }

   useEffect(() => {
      showButton()
   },[]);

   window.addEventListener('resize', showButton)

   return (
      <>
         <IconContext.Provider value={{color: 'var(--white)'}}>
            <Nav id={id}>
               <NavbarContainer>
                  <NavLogo to='/' onClick={closeMobileMenu}>
                     <NavIcon />
                     ULTRA
                  </NavLogo>
                  <MobileIcon
                     onClick={handleClick}
                     >
                     {click ? <FaTimes />:<FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                     <NavItem>
                        <NavLinks to='/'>
                           Home
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/services'>
                           Services
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/products'>
                           Products
                        </NavLinks>
                     </NavItem>
                     <NavItemBtn>
                        {button ? (
                           <NavBtnLink to='/sing-up'>
                              <Button primary>SING UP</Button>
                           </NavBtnLink>
                        ) : (
                           <NavBtnLink to='/sing-up'>
                              <Button fontBig primary>
                                 SING UP
                              </Button>
                           </NavBtnLink>
                        )}
                     </NavItemBtn>
                  </NavMenu>
               </NavbarContainer>
            </Nav>  
         </IconContext.Provider>
      </>
   )
}

export default Navbar
