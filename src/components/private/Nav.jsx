import Logo from "../util/Logo";
import dropdown from "../../assets/auth/arrow-down.png";
import profileCircle from "../../assets/auth/profile-circle.png";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-8">
      <div className="logo">
        <Logo />
      </div>
      <div className="user flex items-center space-x-2">
        <span className="profile-img">
          <img src={profileCircle} alt="profile circle" />
        </span>
        <span className="name text-sm">John Mark</span>
        <div className="dropdown">
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
