import { Link } from "react-router-dom";

import ScrollLink from "./smooth-scolling/ScrollLink";
import Logo from "./util/Logo";
const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 ">
        <Logo />

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
          <Link to="/auth">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
