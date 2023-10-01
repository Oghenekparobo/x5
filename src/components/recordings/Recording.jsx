import rec from "../../assets/works/Rec.svg";
import copy from "../../assets/auth/copy.png";
import Player from "../player/Player";
import ReactPlayer from "react-player";

const Recording = () => {
  return (
    <section className="recording px-8">
      <div className="recording-name capitalize">
        <h1 className="font-bold text-xl py-6">
          How to create Facebook Ad listing
        </h1>
      </div>

      <div className="recording-video__loader  ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width="100%"
          // height="100%"
        />
        ;
      </div>

      <div className="links flex flex-col justify-between items-center space-y-10 md:space-y-0 md:flex-row">
        <div className="email-reciever bg-custom-body py-2 px-10 w-96 flex justify-between rounded-xl">
          <input
            type="text"
            placeholder="enter email of reciever"
            className="bg-transparent"
          />
          <button
            type="submit"
            className="bg-gray-400 px-4 py-2 text-white rounded-md"
          >
            send
          </button>
        </div>
        <div className="copy-url">
          <div className="email-reciever bg-slate-100 py-2 px-10 w-full flex justify-between rounded-xl border border-gray-300">
            <input
              type="text"
              placeholder="enter email of reciever"
              className="bg-transparent"
            />
            <button
              type="submit"
              className="bg-transparent px-4 py-2 text-white rounded-md flex space-x-2 items-center border border-gray-400 rounded-md"
            >
              <span>
                <img src={copy} alt="copy png" />
              </span>
              <span className="text-slate-800">copy url</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recording;
