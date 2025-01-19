import React, { useRef } from "react";
import DataHeroImage from "../assets/data-hero-image.jpg";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function HomePage() {
  const navigate = useNavigate();
  const quickStartRef = useRef(null);

  const handleGetStarted = () => {
    navigate("/form-page");
  };

  const handleScrollToQuickStart = () => {
    scroller.scrollTo("how-it-works-component", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {/* Hero components starts */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-[10px] md:pt-[100px]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="hero-section flex flex-col max-w-2xl md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-[500] leading-tight mb-4 text-left">
              The smart way <br />to analyze<br />your ads.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 text-left">
              Maximize your ad performance with our intelligent ads analyzer.
              Gain insights, track engagement, and make data-driven decisions to
              boost your ROI effortlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="btn btn-primary btn-sm rounded-lg text-white"
                onClick={handleGetStarted}
              >
                Get started
              </button>
              <button
                className="btn btn-ghost btn-sm rounded-lg"
                onClick={handleScrollToQuickStart}
              >
                See how it works
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-image hidden md:flex md:w-1/2 justify-end">
            <img
              src={DataHeroImage}
              alt="Landing Page Robot"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
      {/* Hero components ends */}

      {/* FAQs/How it work? components starts */}

      <div
        className="how-it-works-component mt-[100px] mb-10"
        ref={quickStartRef}
      >
        {/* Travelify Quick Guide section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center text-4xl font-[500]">
            Quick Start Guide
          </div>
          <ul className="timeline timeline-vertical mt-6 sm:mt-8 lg:mt-10">
            <li>
              <div className="timeline-start text-sm lg:text-3xl font-lato mr-3 sm:mr-4 lg:mr-5">
                Getting started
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end font-lato p-4 sm:p-5 text-custom-gray w-full sm:w-[400px] lg:w-[450px]">
                Click on the "Get Started" button to seamlessly navigate to the
                Trip Planning page, where you’ll be guided through the next
                steps in generating valuable insights into marketing.
              </div>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
            </li>

            <li>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
              <div
                className="timeline-start text-xl sm:text-2xl lg:text-3xl font-lato mr-3 sm:mr-4 lg:mr-5"
                onClick={handleGetStarted}
              >
                Enter your Ad details
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end font-lato p-4 sm:p-5 text-custom-gray w-full sm:w-[400px] lg:w-[450px]">
                Provide details about your product, including its category, the
                intended sales location, and insights into your key competitors
                and sit back and relax till we fetch you insights
              </div>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
            </li>
            <li>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
              <div className="timeline-start text-xl sm:text-2xl lg:text-3xl font-lato mr-3 sm:mr-4 lg:mr-5">
                Generate insights
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end font-lato p-4 sm:p-5 text-custom-gray w-full sm:w-[400px] lg:w-[450px]">
                We will provide you with valuable insights, including effective
                hooks and CTAs that have been tested and proven to achieve
                higher click-through rates, making them the most engaging
                options
              </div>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
            </li>
            <li>
              <hr className="bg-accent w-full sm:w-1/2 lg:w-1/3 mx-auto" />
              <div className="timeline-start text-xl sm:text-2xl lg:text-3xl font-lato mr-3 sm:mr-4 lg:mr-5">
                Comparative study
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end font-lato p-4 sm:p-5 text-custom-gray w-full sm:w-[400px] lg:w-[450px]">
                A detailed comparison of top competitors, highlighting their
                strategies, and offering insights on how to leverage
                attention-grabbing hooks and techniques to effectively attract
                and engage users.
              </div>
              <hr className="bg-white w-full sm:w-1/2 lg:w-1/3 mx-auto" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
