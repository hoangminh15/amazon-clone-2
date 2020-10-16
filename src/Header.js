import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="/PngItem_12080.png" alt="" />
      </Link>
      {/* Logo */}

      {/*SearchBox */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionOne">Hello, Sign In</span>
            <span className="header__optionTwo">Account & Lists</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span>0</span>
          </div>
        </Link>
      </div>
      {/*Basket */}
    </nav>
  );
}

export default Header;
