import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import TargetAudienceImage from "../assets/target-audience.png";
import AdHook from "../assets/ad-hook.png";
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
        <div className="suggestions-container flex flex-row justify-between mt-10">
       
          <div className="target-audience-card flex flex-col items-center shadow-md w-[20rem] p-4 rounded-lg  ">
            <div className="target-audience-image">
              <img
                src={TargetAudienceImage}
                alt="Target Audience Image"
                className="w-20 h-20"
              />
            </div>
            <div className="target-audience-value">
              Your target audience is
              <br></br><strong>18-30</strong>
            </div>
          </div>
          <div className="target-audience-card flex flex-col items-center shadow-md w-[20rem] p-4 rounded-lg  ">
            <div className="target-audience-image">
              <img
                src={AdHook}
                alt="Ad Hook Image"
                className="w-20 h-20"
              />
            </div>
            <div className="target-audience-value">
              Suggested Hook <br></br><strong>This is your sample hook!</strong>
            </div>
          </div>
          <div className="target-audience-card flex flex-col items-center shadow-md w-[20rem] p-4 rounded-lg  ">
            <div className="target-audience-image">
              <img
                src={AdCTA}
                alt="Landing Page Robot"
                className="w-20 h-20"
              />
            </div>
            <div className="target-audience-value">
              CTA 
              <br></br>
              <strong>Click here to get started!</strong>
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
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
  </div>
          </div>
      </div>
    </>
  );
}

export default AnalysisPage;
