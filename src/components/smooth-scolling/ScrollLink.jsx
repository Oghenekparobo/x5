import { Link } from "react-scroll";

const ScrollLink = () => {
  return (
    <Link to="features" smooth={true} duration={500}>
      features
    </Link>
  );
};

export default ScrollLink;
