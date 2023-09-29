import { Link } from "react-router-dom";

import logo from "../assets/Logo.svg";
import ScrollLink from "./smooth-scolling/ScrollLink";
const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 ">
        <Link to="/">
          <div className="logo flex items-center space-x-2">
            <img src={logo} alt="logo" />
            <span className="text-custom-indigo font-bold text-xl">
              HelpMeOut
            </span>
          </div>
        </Link>

        <div className="links">
          <ul className="flex space-x-12 text-sm cursor-pointer capitalize text-black font-bold hover:text-indigo-950">
            <li>
              <ScrollLink />
            </li>
            <li>
              <Link to="#">how it works</Link>
            </li>
          </ul>
        </div>
        <div className="user-auth__reg text-custom-indigo  font-bold text-xl cursor-pointer">
          <Link>Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
