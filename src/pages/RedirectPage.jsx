import React from "react";
import Navbar from "../components/Navbar";
import copy from "../assets/auth/copy.png";
import Share from "../components/share/Share";
import Footer from "../components/Footer";
import Player from "../components/player/Player";

const RedirectPage = () => {
  return (
    <section className="redirect-page">
      <Navbar />

      <section className="video-details">
        <div className="grid grid-cols-2 my-20">
          <section className="desc__url flex flex-col items-center space-y-10">
            <h1 className="font-bold text-3xl">Your video is ready!</h1>

            <div className="rec-name">
              <p className="capitalize text-gray-500">name</p>
              <h2 className="mb-10">
                <span className="">recording name</span> <span>logo</span>
              </h2>

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
            </div>

            <div className="copy-url">
              <p className="font-bold">Video url</p>
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

            <Share />
          </section>
          <section className="video__transcripts">
            <div className="videoplayer">
              <Player />
            </div>
            <div className="transcripts">transcripts</div>
          </section>
        </div>

        <section className="save_video flex flex-col items-center justify-center py-14 bg-custom-body space-y-4">
          <p className="max-w-sm font-bold">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>

          <button className="bg-custom-indigo text-white px-4 py-1 rounded-md">
            save
          </button>

          <p>Don’t have an account? Create account</p>
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default RedirectPage;
