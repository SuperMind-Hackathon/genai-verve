import React from "react";
import VideoWalkThrough from "../assets/VideoWalkThroughIcon.png";
import GithubLogo from "../assets/github-icon.png";
import WebLogo from "../assets/web-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container flex flex-row items-center justify-between p-4">
      <div className="brand text-sm font-semibold flex items-center mb-4 md:mb-0">
        <img src={WebLogo} alt="Video Walkthrough" className="w-10 h-10 mr-2" />
        ART Analyser
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <button
          className="btn btn-neutral btn-sm rounded-lg text-white mb-2 md:mb-0 md:mr-4"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <img src={VideoWalkThrough} alt="Video Walkthrough" className="w-6 h-6 mr-2" />
          View Demo
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box border border-white border-[0.5px] rounded-lg">
            <h3 className="font-bold text-lg text-left">ART Analyser walkthrough</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YfwsnMbPyh8?si=y_kJ_TFilEqeV29s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-neutral btn-sm rounded-lg"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_1");
                    if (modal) {
                      modal.close();
                    }
                  }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <a
          href="https://github.com/hemant-mistry/supermind-assignment-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neutral btn-sm rounded-lg flex items-center text-white"
        >
          <img src={GithubLogo} alt="GitHub" className="w-6 h-6 mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}