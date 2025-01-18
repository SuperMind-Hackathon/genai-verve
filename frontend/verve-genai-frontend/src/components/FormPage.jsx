import React, { useState } from 'react';

function FormPage() {
  const [sliderValue, setSliderValue] = useState(25);
  const [productDescription, setProductDescription] = useState('');
  const [customerSegment, setCustomerSegment] = useState('');
  const [adLocation, setAdLocation] = useState('');
  const [competitor, setCompetitor] = useState('');

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const getAgeGroup = (value) => {
    switch (parseInt(value, 10)) {
      case 0:
        return 'Children';
      case 50:
        return 'Teenager';
      case 100:
        return 'Adults';
      default:
        return '';
    }
  };

  const handleSubmit = async () => {
    const formData = {
        productDescription,
        customerSegment,
        adLocation,
        ageGroup: getAgeGroup(sliderValue),
        competitor,
      };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/ads-details/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
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
              What's your target age group?
            </div>
            <div className="form-fields-input">
              <input
                type="range"
                min={0}
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="range range-xs mt-5"
                step="25"
              />
              <div className="flex justify-between px-2 text-xs mt-2">
                <span>Children</span>
                <span>Teenager</span>
                <span>Adults</span>
              </div>
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
          className="btn btn-sm max-w-xs btn-primary text-white rounded-lg max-w-[150px] mt-5"
          onClick={handleSubmit}
        >
          Start Analysis
        </button>
      </div>
    </>
  );
}

export default FormPage;