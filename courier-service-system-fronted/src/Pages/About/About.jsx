import React from 'react';
import { FaCheckCircle } from "react-icons/fa"; // Checkmark icon from React Icons

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Why <span className="text-blue-900">Sundarban Courier Service </span>(Pvt.) Ltd</h1>
                    <p className="text-xl text-gray-600 mt-4">
                    Sundarban is a household name to all in Bangladesh for having been the pioneer of Courier and Parcel Services in this country. From the Corporate Clients to the average person all the persons have been availing the services of Sundarban.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - List with Checkmarks */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Few cool reasons why you choose Sundarban Courier Service (Pvt.) Ltd.
          </h3>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Sundarban is a household name to all in Bangladesh for having been  in this country.

            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              It is reliable and trustworthy for corporate and individual clients alike.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Years of service to both mass and corporate clients make it a trusted service for all.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              No bias is maintained, ensuring equal attention to all clients, resulting in repeat business.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              A single point of contact for multiple services, including its own logistics fleet.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Presence in every remote pocket of the country, clients to send and receive packages.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Presence in every remote pocket of the country, clients to send and receive packages.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Presence in every remote pocket of the country, clients to send and receive packages.
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <img
            src="/src/assets/img/aout/Parcel.jpg" // Replace with your image URL
            alt="Sundarban Courier Service"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>




                {/* choose us */}

                <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Runner Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">Runner Service</h3>
            </div>
            <p className="text-gray-600">Efficient and reliable runner services for your daily needs.</p>
          </div>

          {/* Service 2: No Hidden Cost */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">No Hidden Cost</h3>
            </div>
            <p className="text-gray-600">Transparent pricing with no hidden fees, ensuring you know exactly what you pay for.</p>
          </div>

          {/* Service 3: Free Estimates */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">Free Estimates</h3>
            </div>
            <p className="text-gray-600">Get free estimates before making any commitment. No obligation, just a clear understanding of the cost.</p>
          </div>

          {/* Service 4: Emergency Services On Demand */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">Emergency Services On Demand</h3>
            </div>
            <p className="text-gray-600">Need urgent assistance? Our emergency services are available whenever you need them.</p>
          </div>

          {/* Service 5: Logistics Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">Logistics Service</h3>
            </div>
            <p className="text-gray-600">End-to-end logistics solutions, from transportation to warehousing, tailored to your needs.</p>
          </div>

          {/* Service 6: Economical */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">Economical</h3>
            </div>
            <p className="text-gray-600">Affordable services without compromising on quality, ensuring maximum value for your money.</p>
          </div>
        </div>
      </div>
    </div>

                {/* choose us ed */}










                Features
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Wide Selection of Restaurants</h3>
                        <p className="text-gray-600 mt-4">
                            Choose from a variety of local restaurants offering diverse cuisines, all available in one place.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Fast and Reliable Delivery</h3>
                        <p className="text-gray-600 mt-4">
                            Our delivery partners are always on time, ensuring your food arrives quickly and safely.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Easy Ordering</h3>
                        <p className="text-gray-600 mt-4">
                            With our simple and intuitive interface, ordering your favorite meals is just a few clicks away.
                        </p>
                    </div>
                </div> */}

                {/* Contact Information */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Have any questions or feedback? Feel free to reach out to us!
                    </p>
                    <div className="mt-8">
                        <p className="text-xl text-gray-700">Email: support@swiftCourierservice.com</p>
                        <p className="text-xl text-gray-700 mt-2">Phone: +1 (800) 17-544567</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
