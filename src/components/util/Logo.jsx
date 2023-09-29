import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
const Logo = () => {
  return (
    <Link to="/">
      <div className="logo flex items-center space-x-2">
        <img src={logo} alt="logo" />
        <span className="text-custom-indigo font-bold text-xl">HelpMeOut</span>
      </div>
    </Link>
  );
};

export default Logo;
