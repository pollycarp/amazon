import React from 'react'
import './Header.css ';

function Header() {
  return (
  <div className='header'>
      <img className ="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />

    <div 
    className="header__search">
      <input
      className="header__searchInput" type="text"
      />
      {/*logo*/}

    </div>

    <div className="header__nav">
      <div className='header__option'>
          <span 
          className='header__optionLineone'>Hello Guest</span>
          <span
          className='header__optionLineTwo'>Sign In</span>
      </div>

      <div className='header__option'>
          <span 
          className='header__optionLineone'>Returns</span>
          <span
          className='header__optionLineTwo'>&Order</span>
      </div>

      <div className='header__option'>
          <span 
          className='header__optionLineone'>Your</span>
          <span
          className='header__optionLineTwo'>Prime</span>
      </div>
    </div>
  </div>
  )
}

export default Header
