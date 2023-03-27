import React from "react";
import logo from '../../assets/images/Logo.svg'

const Header = () => {
  return (
    <nav className="bg-slate-800">
      <div className="navbar container mx-auto text-white pr-0">
        <div className="flex-1">
        <a href="/home">
            <img src={logo} alt="" />
        </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-orange-300">
              <a href="/order">Order</a>
            </li>
            <li className="hover:text-orange-300">
              <a href="/order-review">Order Review</a>
            </li>
            <li className="hover:text-orange-300">
              <a href="/inventory">Manage Inventory</a>
            </li>
            <li className="hover:text-orange-300">
              <a className="pr-0" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
