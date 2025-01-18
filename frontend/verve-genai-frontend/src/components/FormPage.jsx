import React from "react";

function FormPage() {
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
              Tell us about your Ad:
            </div>
            <div className="form-fields-input flex items-center">
            <textarea className="textarea textarea-bordered mt-5" cols={100} placeholder="Describe your Ad topic..."></textarea>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
