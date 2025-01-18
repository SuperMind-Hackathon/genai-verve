import React from "react";
import Spline from "@splinetool/react-spline";
function HomePage() {
  return (
    <>
      {/* Hero components starts */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-[50px]">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="hero-section flex flex-col max-w-2xl md:w-1/2">
              <h1 className="text-5xl font-[500] leading-tight mb-4 text-left">
                The best way <br /> to showcase <br /> your project.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 text-left">
                Here you can put a short description about your project.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-sm rounded-lg text-white">
                  Get started
                </button>
                <button
                  className="btn btn-ghost btn-sm rounded-lg"
                >
                  See how it works
                </button>   
              </div>
            </div>

            {/* Image Section */}
            <div className="hero-image hidden md:flex md:w-1/2 justify-end">
              
            </div>
          </div>
        </div>
    {/* Hero components ends */}
    
    {/* Get started components starts */}

    </>
  );
}

export default HomePage;
