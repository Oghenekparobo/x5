import Logo from "../util/Logo";
import dropdown from "../../assets/auth/arrow-down.png";
import profileCircle from "../../assets/auth/profile-circle.png";
const Nav = () => {
  return (
    <nav className="flex flex-col space-y-10 items-center justify-between px-8 py-8 md: space-y-0 md:flex-row">
      <div className="logo py-10 md:py-0">
        <Logo />
      </div>
      <div className="user flex flex-col space-y-14 items-center space-x-2 md:space-x-0 md:space-y-0 md:flex-row">
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
