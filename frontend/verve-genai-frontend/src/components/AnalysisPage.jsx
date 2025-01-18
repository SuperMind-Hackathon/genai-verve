import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import TargetAudienceImage from "../assets/target-audience.png";
import AdHook from "../assets/ad-hook.png";
import GeminiIcon from "../assets/gemini-icon.png";
import AdCTA from "../assets/ad-cta.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sample Data",
      data: [65, 59, 80, 100, 56, 55, 40],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sample Bar Chart",
    },
  },
};

function AnalysisPage() {
  return (
    <>
      <div className="analysis-page">
        <div className="competitor-analysis text-left mt-10">
          <div className="competitor-analysis-header text-3xl">
            AI-Generated Suggestions
          </div>
        </div>
        <div className="divider w-1/3 gray-200"></div>
        <div className="suggestions-container flex flex-col justify-between mt-10">
          <div className="target-audience-card flex flex-row w-full p-4 rounded-lg">
            {" "}
            <div className="target-audience-image">
              <img
                src={AdHook}
                alt="Ad Hook Image"
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="hook-details flex flex-col p-10">
              <div className="suggested-hook-title text-2xl text-left">
                Hook Details
              </div>
              <div className="suggested-hook-value text-left mt-2 text-lg">
                Suggested hook:{" "}
                <span className="font-[500]">
                  This is a sample awesome hook!
                </span>
              </div>
              <div className="suggested-hook-justification text-left mt-2 max-w-lg">
                <div className="suggested-hook-justification-title text-lg">
                  Why are we suggesting it?
                </div>
                <div className="suggested-hook-justification-desc mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
              </div>
              <div className="suggest-more-button text-left mt-5">
                <button
                  className="btn btn-sm btn-neutral rounded-lg"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <img
                    src={GeminiIcon}
                    alt="Video Walkthrough"
                    className="w-5 h-5 mr-2"
                  />
                  Get more AI Powered suggestions
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">
                      Describe the changes you want
                    </h3>
                    <textarea
                      className="textarea textarea-bordered mt-5"
                      placeholder="Describe your changes and let AI do the magic!"
                      cols={65}
                      rows={4}
                    ></textarea>
                    <div className="flex justify-end">
                      <button className="btn btn-sm rounded-lg mt-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
          <div className="target-audience-card flex flex-row w-full p-4 rounded-lg mt-10">
            {" "}
            <div className="hook-details flex flex-col p-10">
              <div className="suggested-hook-title text-2xl text-left">
                CTA Details
              </div>
              <div className="suggested-hook-value text-left mt-2 text-lg">
                Suggested CTA:{" "}
                <span className="font-[500]">
                  This is a sample awesome CTA!
                </span>
              </div>
              <div className="suggested-hook-justification text-left mt-2 max-w-lg">
                <div className="suggested-hook-justification-title text-lg">
                  Why are we suggesting it?
                </div>
                <div className="suggested-hook-justification-desc mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </div>
              </div>
              <div className="suggest-more-button text-left mt-5">
                <button className="btn btn-sm btn-neutral rounded-lg">
                  <img
                    src={GeminiIcon}
                    alt="Video Walkthrough"
                    className="w-5 h-5 mr-2"
                  />
                  Get more AI Powered suggestions
                </button>
              </div>
            </div>
            <div className="target-audience-image">
              <img
                src={AdCTA}
                alt="Ad Hook Image"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
        <div className="competitor-analysis text-left mt-10">
          <div className="competitor-analysis-header text-3xl">
            Competitor Analysis
          </div>
        </div>
        <div className="divider w-1/3 gray-200"></div>
        <div className="visual-analysis-container flex flex-row items-center p-10">
          <div className="chart-container max-w-xs">
            <Pie data={pieData} />
          </div>
          <div className="chart-description text-right max-w-lg ml-auto text-lg pr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with.
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalysisPage;
