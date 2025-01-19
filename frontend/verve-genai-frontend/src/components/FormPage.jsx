import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ loading, setLoading }) {
  const [productDescription, setProductDescription] = useState("");
  const [customerSegment, setCustomerSegment] = useState("");
  const [adLocation, setAdLocation] = useState("");
  const [competitor, setCompetitor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      productDescription,
      customerSegment,
      adLocation,
      competitor,
    };

    try {
      const response = await fetch(
        "https://genai-verve.onrender.com/api/getresponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Form submitted successfully:", data);

      // Navigate to AnalysisPage with the received response

      navigate("/analysis", { state: { response: data } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="form-page-container flex flex-col p-10">
          <div className="form-page-header text-xl text-left">
            Fill in the below details to begin with the analysis!
          </div>
          <div className="divider w-1/2"></div>
          <div className="form-fields flex flex-col">
            <div className="form-fields-container">
              <div className="form-fields-header text-left">
                Tell us about your product:
              </div>
              <div className="form-fields-input flex items-center">
                <textarea
                  className="textarea textarea-bordered mt-3 rounded-lg"
                  cols={100}
                  placeholder="Describe your product..."
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-fields flex flex-col mt-5">
            <div className="form-fields-container">
              <div className="form-fields-header text-left">
                What is your customer segment?
              </div>
              <div className="form-fields-input flex items-center">
                <input
                  type="text"
                  placeholder="Ex Health, Sports"
                  className="input input-bordered input-sm w-full max-w-xs mt-3 rounded-lg"
                  value={customerSegment}
                  onChange={(e) => setCustomerSegment(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-fields flex flex-col mt-5">
            <div className="form-fields-container">
              <div className="form-fields-header text-left">
                Enter your ad campaign location:
              </div>
              <div className="form-fields-input flex items-center">
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered input-sm w-full max-w-xs mt-3 rounded-lg"
                  value={adLocation}
                  onChange={(e) => setAdLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-fields flex flex-col mt-5">
            <div className="form-fields-container">
              <div className="form-fields-header text-left">
                Enter your potential competitor:
              </div>
              <div className="form-fields-input flex items-center">
                <input
                  type="text"
                  placeholder="Ex, ABC, XYZ company"
                  className="input input-bordered input-sm w-full max-w-xs mt-3 rounded-lg"
                  value={competitor}
                  onChange={(e) => setCompetitor(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-sm max-w-xs btn-primary text-white rounded-lg max-w-[120px] mt-5"
            onClick={handleSubmit}
          >
            Start Analysis
          </button>
        </div>
      )}
    </>
  );
}

export default FormPage;
