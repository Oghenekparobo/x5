import right from "../../assets/ArrowRight.svg";
import frame1 from "../../assets/Frame1.jpg";
import frame3 from "../../assets/Frame3.jpg";
import frame4 from "../../assets/Frame4.jpg";
import dotted1 from "../../assets/Dotted1.png";
import dotted2 from "../../assets/Dotted2.png";

const Header = () => {
  return (
    <section className=" bg-white w-full my-1 shadow-sm py-36">
      <header className="max-w-7xl mx-auto px-8 grid grid-cols-2">
        <div className="header-text place-self-center">
          <h1 className="text-black font-bold text-5xl max-w-sm">
            Show Them Don't Just Tell
          </h1>
          <p className="text-small-txt max-w-md my-6">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>

          <button className="bg-custom-indigo text-white text-sm flex py-2 px-4 rounded-md space-x-2">
            <span>Install HelpMeOut</span>

            <img src={right} alt="arrow-right" />
          </button>
        </div>
        <div className="header-img ">
          <div className="header-img__box flex space-x-6">
            <div className="half-boxes flex flex-col space-y-4 items-center">
              <div className="half-img__one w-60 h-40">
                <img
                  src={frame1}
                  className="w-full h-full object-cover aspect-square rounded-md "
                  alt="a lady with an headphone on sitting in front of a macbook"
                />
              </div>
              <div className="half-img__one relative w-60 h-40">
                <img
                  src={frame3}
                  className="w-full h-full object-cover aspect-square rounded-md  absolute z-50"
                  alt="a man pointing to,showing his son a picture or video(course) on the laptop"
                />
                <img
                  src={dotted1}
                  alt="dotted svg"
                  className="absolute -bottom-24  -left-8 object-cover aspect-square z-10"
                />
              </div>
            </div>
            <div className="full-box relative w-60">
              <img
                src={frame4}
                className="w-full h-full object-cover aspect-square rounded-md z-50 absolute"
                alt="a lady with smiling while looking at her mobile phone"
              />
              <img
                src={dotted2}
                alt="dotted svg"
                className="absolute -top-14 left-10 z-10 object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
