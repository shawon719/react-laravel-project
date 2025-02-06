import React from 'react';
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import myImage from './assets/my-image.jpg'; // Import image
import Carousel from '../Carousal/Carousal';

const Home = () => {
  const [searchLocation, setSearchLocation] = useState(""); // Store search location
  // Handle search location input change
  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  // Handle search submit (this would trigger actual filtering logic)
  const handleSearchSubmit = () => {
    const filtered = foodItems.filter(
      (item) => item.name.toLowerCase().includes(searchLocation.toLowerCase()) // Example filter based on food name
    );
    setFilteredProducts(filtered);
  };

  return (
    // <div>
    //     this this is home.
    // </div>

    <>
      <Carousel></Carousel>

      {/* Beautiful Search Bar Below Carousel */}
      <div className="w-full p-5 flex justify-center items-center mt-6 rounded-lg shadow-lg">
        <div className="relative w-2/3">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search branch in your area..."
            value={searchLocation}
            onChange={handleLocationChange}
            className="w-full p-2 pl-10 pr-4 rounded-full text-base sm:text-lg border-2 border-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ease-in-out duration-300 placeholder:text-sm sm:placeholder:text-base"
          />
          {/* Location Icon on Right */}
          <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-xl">
            <i className="fas fa-map-marker-alt"></i>
          </span>
        </div>
        <button
          onClick={handleSearchSubmit}
          className="lg:ml-4 ml-2 px-4 py-2 sm:px-8 sm:py-2 bg-indigo-600 text-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700 text-sm sm:text-base"
        >
          Search
        </button>
      </div>
      {/* search bar end here */}

      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center">
            Our Valuable Services
          </h1>
          <p className="text-center">
            Thanks for staying at{" "}
            <a href="#" className="text-orange-500">
              Courier Services
            </a>
            . We hope to have the pleasure of doing business with you in the
            future.
          </p>

          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="space-y-6">
                <div>
                  <img
                    src="/src/assets/img/services/ict.png"
                    className="w-24 rounded-full"
                    alt="Mobile & ICT Equipment Service"
                  />
                  <h1 className="text-2xl font-bold">
                    Mobile & ICT Equipment Service
                  </h1>
                  <p className="py-6">
                    These are regular parcel services limited to the mobile and
                    ICT importers/distributors/manufacturers and vendors who
                    seek parcel delivery services from us.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>

                <div>
                  <img
                    src="/src/assets/img/services/ECommerce.png"
                    className="w-24 rounded-full"
                    alt="E-Commerce Service"
                  />
                  <h1 className="text-2xl font-bold">E-Commerce Service</h1>
                  <p className="py-6">
                    These are regular parcel services limited to the mobile and
                    ICT importers/distributors/manufacturers and vendors who
                    seek parcel delivery services from us.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>

              <div className="avatar">
                <img
                  src="/src/assets/img/services/van-inscri.webp"
                  className="w-24 rounded-full"
                  alt="Avatar"
                style={{margin:20}}/>
              </div>

              <div className="space-y-6">
                <div>
                  <img
                    src="/src/assets/img/services/ECommerce.png"
                    className="w-24 rounded-full"
                    alt="Document Service"
                  />
                  <h1 className="text-2xl font-bold">Document Service</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>

                <div>
                  <img
                    src="/src/assets/img/services/dolar.png"
                    className="w-24 rounded-full"
                    alt="Value Declared Service"
                  />
                  <h1 className="text-2xl font-bold">Value Declared Service</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;