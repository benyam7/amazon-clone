import React from "react";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase/firebase";
const Header = () => {
  // logo on left -> mage
  // search box
  // 3 links
  // basket icon with number
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user?.email} </span>
            <span onClick={login} className="header__opitonLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__opitonLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__opitonLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__opitonBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__shoppingBasket">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
