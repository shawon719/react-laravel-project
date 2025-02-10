import React, { useState } from "react";

const WhyChooseUs = () => {
  // State to toggle the visibility of each section
  const [activeSection, setActiveSection] = useState(null);

  // Function to toggle the visibility of a section
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Our Speed",
      description:
        "Why use a Courier Service if the item won’t arrive quickly? Our streamlined network ensures the fastest possible movement of documents and packages.",
    },
    {
      title: "Reliability",
      description:
        "The SCS system of security checks and emergency back-ups is absolutely complete. Thanks to computerized administration and a staff that is second to none.",
    },
    {
      title: "Low Cost",
      description:
        "All rates are quite reasonable, even for heavy/lightweight items, fragile items, articles, or bulky printed materials.",
    },
    {
      title: "Simplicity",
      description:
        "One telephone call is all it takes to set the process in motion. After that you can leave everything to us, including customs clearance and any last-minute details.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          There are basic principles that we consistently uphold.
        </p>

        {/* List of sections */}
        <ul className="space-y-6">
          {sections.map((section, index) => (
            <li key={index} className="border-2 border-green-500 rounded-xl shadow-md bg-white p-6 hover:shadow-lg transition-shadow duration-300">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h3 className="text-2xl font-semibold text-green-700">
                  {section.title}
                </h3>
                <span className="text-2xl text-green-700">
                  {activeSection === index ? "❌" : "➕"}
                </span>
              </div>
              {activeSection === index && (
                <p className="mt-4 text-lg text-gray-700">{section.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
