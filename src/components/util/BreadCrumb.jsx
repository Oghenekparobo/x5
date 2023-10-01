import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="breadcrumbs max-w-6xl px-8 text-sm ">
      <Link to={"/"}>
        <span>Home</span>
      </Link>
      / <span>Recent Videos</span> /
      <span className="pl-4 text-custom-indigo font-bold">
        How to create Facebook Ad listing
      </span>
    </div>
  );
};

export default BreadCrumb;
