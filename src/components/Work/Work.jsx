import card from "../../assets/works/Rec.svg";
const Work = () => {
  return (
    <section className="features w-full bg-white mt-18" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="header-text text-center py-14">
          <h2 className="capitalize text-3xl font-bold">How it works</h2>
        </div>

        <div className="work-wrappers grid grid-cols-3 gap-6 py-20">
          <div className="work-section">
            <div className="work-number text-center flex flex-col justify-center items-center">
              <div className="bg-indigo-950 text-white h-8 w-8 w-4 p-1 rounded-full ">
                <h1>1</h1>
              </div>
              <h4 className="text-xl text-custom-indigo font-bold my-2">
                Record Screen
              </h4>
            </div>

            <div className="work-paragraph max-w-sm text-sm text-center my-6">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </div>
            <div className="work-img">
              <img src={card} alt="recording caard illustration" />
            </div>
          </div>
          <div className="work-section">
            <div className="work-number text-center flex flex-col justify-center items-center">
              <div className="bg-indigo-950 text-white h-8 w-8 w-4 p-1 rounded-full ">
                <h1>2</h1>
              </div>
              <h4 className="text-xl text-custom-indigo font-bold my-2">
                Share Your Recording
              </h4>
            </div>

            <div className="work-paragraph max-w-sm text-sm text-center my-6">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </div>
            <div className="work-img">
              <img src={card} alt="recording caard illustration" />
            </div>
          </div>
          <div className="work-section">
            <div className="work-number text-center flex flex-col justify-center items-center">
              <div className="bg-indigo-950 text-white h-8 w-8 w-4 p-1 rounded-full ">
                <h1>3</h1>
              </div>
              <h4 className="text-xl text-custom-indigo font-bold my-2">
                Learn Effortlessly
              </h4>
            </div>

            <div className="work-paragraph max-w-sm text-sm text-center my-6">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </div>
            <div className="work-img">
              <img src={card} alt="recording caard illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
