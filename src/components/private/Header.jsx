import search from "../../assets/auth/search-normal.png";
const Header = () => {
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="user-dets flex justify-between max-w-6xl  mx-auto">
        <div className="user-dets__texts">
          <h1 className="font-bold text-3xl py-2">Hello, John Mark</h1>
          <p className="text-sm text-gray-400 tracking-wider">
            Here are your recorded videos
          </p>
        </div>

        <div className="search-container">
          <div className="flex bg-custom-body relative w-64 py-2 rounded-lg">
            <input
              type="search"
              placeholder="Search for a particular video"
              className="outline-none w-full pl-10 bg-transparent text-sm "
            />
            <img
              src={search}
              alt="search icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
