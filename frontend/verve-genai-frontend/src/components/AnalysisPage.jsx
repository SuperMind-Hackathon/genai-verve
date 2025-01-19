import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import AdHook from "../assets/ad-hook.png";
import GeminiIcon from "../assets/gemini-icon.png";
import AdCTA from "../assets/ad-cta.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Competitor CTR Analysis",
    },
  },
};

function AnalysisPage({ setLoading }) {
  const location = useLocation();
  const { response } = location.state || {};

  useEffect(() => {
    setLoading(false); // Set loading to false when the component mounts
  }, [setLoading]);

  const analysisData = response.analysis ? JSON.parse(response.analysis) : {};
  const ctrData = response.ctr ? JSON.parse(response.ctr) : {};
  const hooksData = response.hooks ? JSON.parse(response.hooks) : {};

  const competitorNames = Object.keys(analysisData.Competitor_Analysis || {});
  const competitorCTRs = competitorNames.map(
    (competitor) => parseFloat(analysisData.Competitor_Analysis[competitor].CTR)
  );

  const pieData = {
    labels: competitorNames,
    datasets: [
      {
        label: "# of CTR",
        data: competitorCTRs,
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

  const lineData = {
    labels: competitorNames,
    datasets: [
      {
        label: "CTR Over Time",
        data: competitorCTRs,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const getColor = (value, threshold) => (parseFloat(value) < threshold ? "red" : "green");


  return (
    <>
      <div className="analysis-page">
        <div className="competitor-analysis text-left mt-10">
          <div className="competitor-analysis-header text-2xl md:text-3xl">
            AI-Generated Suggestions
          </div>
        </div>
        <div className="divider w-1/3 gray-200"></div>
        <div className="suggestions-container flex flex-col justify-between mt-10">
          <div className="target-audience-card flex flex-col md:flex-row w-full p-4 rounded-lg">
            <div className="target-audience-image hidden md:block">
              <img
                src={AdHook}
                alt="Ad Hook Image"
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="hook-details flex flex-col p-4 md:p-10">
              <div className="suggested-hook-title text-xl md:text-2xl text-left">
                Hook Details
              </div>
              <div className="suggested-hook-value text-left mt-2 text-md md:text-lg">
                Suggested hook:{" "}
                <span className="font-[500]">
                  {hooksData.Suggested_Hooks && hooksData.Suggested_Hooks[0]}
                </span>
              </div>
              <div className="suggested-hook-estimates text-left mt-2 text-sm md:text-base">
                <p style={{ color: getColor(hooksData.CTR_Estimates[hooksData.Suggested_Hooks[0]], 2) }}>
                  CTR Estimate: {hooksData.CTR_Estimates && hooksData.CTR_Estimates[hooksData.Suggested_Hooks[0]]}
                </p>
                <p style={{ color: getColor(hooksData.Engagement_Rate_Estimates[hooksData.Suggested_Hooks[0]], 1) }}>
                  Engagement Rate Estimate: {hooksData.Engagement_Rate_Estimates && hooksData.Engagement_Rate_Estimates[hooksData.Suggested_Hooks[0]]}
                </p>
                <p style={{ color: getColor(hooksData.Conversion_Rate_Estimates[hooksData.Suggested_Hooks[0]], 2) }}>
                  Conversion Rate Estimate: {hooksData.Conversion_Rate_Estimates && hooksData.Conversion_Rate_Estimates[hooksData.Suggested_Hooks[0]]}
                </p>
              </div>
              <div className="suggested-hook-justification text-left mt-2 text-sm md:text-base max-w-lg">
                <div className="suggested-hook-justification-title text-md md:text-lg">
                  Why are we suggesting it?
                </div>
                <div className="suggested-hook-justification-desc mt-2">
                  {hooksData.Reasoning}
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
          <div className="target-audience-card flex flex-col md:flex-row w-full p-4 rounded-lg mt-10">
            <div className="hook-details flex flex-col md:flex-row p-4 md:p-10 w-full">
              <div className="w-full md:w-1/2">
                <div className="suggested-hook-title text-xl md:text-2xl text-left">
                  CTA Details
                </div>
                <div className="suggested-hook-value text-left mt-2 text-md md:text-lg">
                  Suggested CTA:{" "}
                  <span className="font-[500]">
                    {ctrData.Suggested_CTAs && ctrData.Suggested_CTAs[0]}
                  </span>
                </div>
                <div className="suggested-cta-estimates text-left mt-2 text-sm md:text-base">
                  <p style={{ color: getColor(ctrData.CTR_Estimates[ctrData.Suggested_CTAs[0]], 2) }}>
                    CTR Estimate: {ctrData.CTR_Estimates && ctrData.CTR_Estimates[ctrData.Suggested_CTAs[0]]}
                  </p>
                  <p style={{ color: getColor(ctrData.Engagement_Rate_Estimates[ctrData.Suggested_CTAs[0]], 1) }}>
                    Engagement Rate Estimate: {ctrData.Engagement_Rate_Estimates && ctrData.Engagement_Rate_Estimates[ctrData.Suggested_CTAs[0]]}
                  </p>
                  <p style={{ color: getColor(ctrData.Conversion_Rate_Estimates[ctrData.Suggested_CTAs[0]], 2) }}>
                    Conversion Rate Estimate: {ctrData.Conversion_Rate_Estimates && ctrData.Conversion_Rate_Estimates[ctrData.Suggested_CTAs[0]]}
                  </p>
                </div>
                <div className="suggested-hook-justification text-left mt-2 text-sm md:text-base max-w-lg">
                  <div className="suggested-hook-justification-title text-md md:text-lg">
                    Why are we suggesting it?
                  </div>
                  <div className="suggested-hook-justification-desc mt-2">
                    {ctrData.Reasoning}
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
              <div className="target-audience-image hidden md:block">
                <img
                  src={AdCTA}
                  alt="Ad Hook Image"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="competitor-analysis text-left mt-10">
          <div className="competitor-analysis-header text-2xl md:text-3xl">
            Competitor Analysis
          </div>
        </div>
        <div className="divider w-1/3 gray-200"></div>
        <div className="visual-analysis-container flex flex-col md:flex-row items-center p-4 md:p-10">
          <div className="chart-container max-w-xs">
            <Pie data={pieData} options={options} />
          </div>
          
          <div className="chart-description text-left md:text-right max-w-lg ml-auto text-sm md:text-lg pr-0 md:pr-10 mt-4 md:mt-0">
            {competitorNames.map((competitor) => (
              <div key={competitor}>
                <div className="competitor-name text-2xl mt-4">{competitor}</div>
                <div className="competitor-reasoning" >
                  {analysisData.Competitor_Analysis[competitor].Reasoning}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-container mt-10 md:mt-0">
            <Line data={lineData} options={options} />
          </div>
      </div>
    </>
  );
}

export default AnalysisPage;