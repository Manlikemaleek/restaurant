import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import{MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import Images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
        <div className='app__navbar'>
          <div className='app__navbar-logo'>

            <img src={images.logo} alt="logo" />

          </div>

          <ul  className='app__navbar-links'>

            <li className='p__opensans'><a href="#Home">Home</a></li>
            <li className='p__opensans'><a href="#About">About</a></li>
            <li className='p__opensans'><a href="#Menu">Menu</a></li>
            <li className='p__opensans'><a href="#Awards">Awards</a></li>
            <li className='p__opensans'><a href="#Home">Contact</a></li>



          </ul>
          <div className='app__navbar-login'>

            <a href="#login" className='p__opensans'>Login/Register</a> 
            <div />

            <a href="/" className='p__opensans'>Table Bookings</a>

          </div>
          <div className='app__navbar-smallscreen'>

            <GiHamburgerMenu  color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>


            {toggleMenu &&(


            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu  className='overlay__close' fontSize={27} onClick={()=>setToggleMenu(false)}/>

              <ul  className='app__navbar-smallscrren_links'>

      <li className='p__opensans'><a href="#Home">Home</a></li>
      <li className='p__opensans'><a href="#About">About</a></li>
      <li className='p__opensans'><a href="#Menu">Menu</a></li>
      <li className='p__opensans'><a href="#Awards">Awards</a></li>
      <li className='p__opensans'><a href="#Home">Contact</a></li>



      </ul>
            </div>
            )}

          </div>
        </div>
        
      );
}

export default Navbar;
