import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  return (
  <div className='header'>
    <Link to="/">
    <img className ="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
    </Link>
    <div
    className="header__search">
      <input
      className="header__searchInput" type="text"
      />
      <SearchIcon className='header__seachIcon'/>

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
           <Link to="/checkout">
           <div className="header__optionBasket">
         <ShoppingCartIcon/>
         <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
           </Link>
      

    </div>
  </div>
  )
}

export default Header
