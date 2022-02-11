import React from 'react';
import{SubHeading} from '../../components';

import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
      <div className='app__wrapper__info'>
          <SubHeading  title="Chase The New Flavour"/>
          <h1 className='app__header-h1'>
            The Key To Fine Dining
          </h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}>Backyard Bowls Here To Offer You The Best Possible Quality Of Meal On Offer</p>
          <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__wrapper-img">
        <img src={images.welcome} alt="header img" />

      </div>
      
  </div>
);

export default Header;
