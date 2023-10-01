import circle from "../../assets/features-assets/record-circle.png";
import send from "../../assets/features-assets/send-2.png";
import recording from "../../assets/features-assets/refresh-square-2.png";
import video from "../../assets/features-assets/VideoRepository.svg";
const Feature = () => {
  return (
    <section className="features w-full bg-white mt-60" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="feature-header text-center py-14">
          <h2 className="capitalize text-3xl font-bold">features</h2>
          <p className="text-gray-450 font-light tracking-wide leading-8">
            Key Highlights of Our Extension
          </p>
        </div>

        {/* /features-grid */}
        <div className=" feature-grid grid grid-col-1 my-14 py-0 px-20 md:px-0 md:py-14 md:grid-cols-2 ">
          <div className="grid-text">
            <div className="grid-feature__box flex">
              <div className="logo bg-custom-indigo rounded-full h-10 p-1">
                <img src={circle} alt="circle png" />
              </div>
              <div className="texts flex flex-col space-y-2 px-8">
                <h4 className="text-custom-indigo font-bold text-2xl">
                  Simple Screen Recording
                </h4>
                <p className="max-w-sm text-sm leading-6 text-gray-400">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>

            <div className="grid-feature__box flex my-10">
              <div className="logo bg-custom-indigo rounded-full h-10 p-1">
                <img src={send} alt="send png" />
              </div>
              <div className="texts flex flex-col space-y-2 px-8">
                <h4 className="text-custom-indigo font-bold text-2xl">
                  Easy-to-Share URL
                </h4>
                <p className="max-w-sm text-sm leading-6  text-gray-400">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>

            <div className="grid-feature__box flex">
              <div className="logo bg-custom-indigo rounded-full h-10 p-1">
                <img src={recording} alt="send png" />
              </div>
              <div className="texts flex flex-col space-y-2 px-8">
                <h4 className="text-custom-indigo font-bold text-2xl">
                  Revisit Recordings
                </h4>
                <p className="max-w-sm text-sm leading-6  text-gray-400">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="img pb-16 py-10 md:py-0">
            <img src={video} alt="video repo img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
