import { Link } from "react-router-dom";
import icon from "../assets/iCON.png";

const Footer = () => {
  return (
    <section
      className="features w-full bg-custom-indigo py-20 px-10"
      id="features"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
        <Link to="/">
          <div className="logo flex items-center space-x-2">
            <img src={icon} alt="logo" />
            <span className="text-white font-bold text-xl">HelpMeOut</span>
          </div>
        </Link>
        <div className="footer-links">
          <ul className="flex flex-col">
            <li className="text-white capitalize hover:font-bold">menu</li>
            <li className="text-white capitalize hover:font-bold">home</li>
            <li className="text-white capitalize hover:font-bold">converter</li>
            <li className="text-white capitalize hover:font-bold">
              how it works
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <ul>
            <li className="text-white capitalize hover:font-bold">about us</li>
            <li className="text-white capitalize hover:font-bold">about</li>
            <li className="text-white capitalize hover:font-bold">
              contact us
            </li>
            <li className="text-white capitalize hover:font-bold">
              privacy policy
            </li>
          </ul>
        </div>

        <div className="footer-etc">
          <ul>
            <li className="text-white capitalize hover:font-bold">
              screen record
            </li>
            <li className="text-white capitalize hover:font-bold">
              browser window
            </li>
            <li className="text-white capitalize hover:font-bold">desktop</li>
            <li className="text-white capitalize hover:font-bold">
              application
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
