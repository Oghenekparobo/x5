import { Link } from "react-router-dom";
import rec from "../../assets/works/Rec.svg";
const Recent = () => {
  return (
    <section className="recent-recordings max-w-6xl mx-auto ">
      <div className="header py-10">
        <h4 className="text-gray-900">Recent files</h4>
      </div>

      <section className="recordings">
        <div className="wrapper grid grid-cols-2">
          <Link to="/Facebook/recording">
            <div className="recording-card border border-gray-200 w-4/5 shadow-sm rounded-xl">
              <div className="recording-card__img w-full p-4">
                <img src={rec} alt="recording-card thumbnail w-full" />
              </div>
              <div className="recording-card__name px-6 font-bold tracking-wide">
                <h4>How to create Facebook Ad listing</h4>
              </div>
              <div className="date text-gray-300 px-6">
                <p>SEPTEMBER 23, 2023</p>
              </div>
            </div>
          </Link>
          <Link to="/Facebook/recording">
            <div className="recording-card border border-gray-200 w-4/5 shadow-sm rounded-xl">
              <div className="recording-card__img w-full p-4">
                <img src={rec} alt="recording-card thumbnail w-full" />
              </div>
              <div className="recording-card__name px-6 font-bold tracking-wide">
                <h4>How to create Facebook Ad listing</h4>
              </div>
              <div className="date text-gray-300 px-6">
                <p>SEPTEMBER 23, 2023</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Recent;
