import search from "../../assets/auth/search-normal.png";

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="user-dets flex flex-col justify-between max-w-6xl mx-auto md:flex-row">
        <div className="user-dets__texts text-center md:text-normal">
          <h1 className="font-bold text-3xl py-2">Hello, John Mark</h1>
          <p className="text-sm text-gray-400 tracking-wider">
            Here are your recorded videos
          </p>
        </div>

        <div className="search-container mt-4 px-6 md:px-0 md:mt-0">
          <div className="flex flex-col bg-custom-body relative w-full md:w-64 py-2 rounded-lg md:flex-row">
            <input
              type="search"
              placeholder="Search for a particular video"
              className="outline-none w-full md:w-56 pl-10 bg-transparent text-sm"
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
