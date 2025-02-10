import React from "react";

// StepBox component to represent each step in the flowchart
const StepBox = ({ title, description }) => {
  return (
    <div className="p-6 m-4 border-2 border-green-500 rounded-xl text-center bg-green-50 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
      <p className="mt-2 text-lg text-gray-700">{description}</p>
    </div>
  );
};

// Main Flowchart component
const WorkProgressFlowchart = () => {
  return (
    <div className="p-8">
      {/* Heading for the flowchart */}
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">
        Our Working Process
      </h1>

      {/* Flowchart */}
      <div className="flex flex-wrap justify-center items-center space-x-8 space-y-8">
      <div className="text-4xl text-green-700 flex justify-center items-center">➡️</div>

        {/* Booking Step */}
        <StepBox
          title="Booking"
          description="Customer books the courier service by providing required details."
        />

        {/* Arrow between steps */}
        <div className="text-4xl text-green-700 flex justify-center items-center">➡️</div>

        {/* Packing Step */}
        <StepBox
          title="Packing"
          description="The items are carefully packed and prepared for transport."
        />

        {/* Arrow between steps */}
      

        {/* Transportation Step */}
        <div className="text-4xl text-green-700 flex justify-center items-center">➡️</div>
        <StepBox
          title="Transportation"
          description="The packed items are transported to the delivery location."
        />

        {/* Arrow between steps */}
        <div className="text-4xl text-green-700 flex justify-center items-center">➡️</div>

        {/* Delivery Step */}
        <StepBox
          title="Delivery"
          description="The parcel is delivered to the recipient's address."
        />
      </div>
    </div>
  );
};

export default WorkProgressFlowchart;
