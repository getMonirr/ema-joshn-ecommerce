import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // handleLogOut
  const handleLogOut = () => {
    logOut().then((result) => {
      console.log("user log out");
    });
  };
  return (
    <nav className="bg-slate-800">
      <div className="navbar container mx-auto text-white pr-0">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-orange-300">
              <Link to="/">Shop</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            {user ? (
              <li onClick={handleLogOut} className="hover:text-orange-300">
                <Link className="pr-0" to="/login">
                  Log Out
                </Link>
              </li>
            ) : (
              <li className="hover:text-orange-300">
                <Link className="pr-0" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="hover:text-orange-300">
              <Link className="pr-0" to="/login">
                {user && user.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
