import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons
import { FaHome, FaBell, FaBriefcase, FaTruck, FaBox, FaClipboardList, FaBuilding } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 via-yellow-900 to-purple-800 bg-[#36244F] text-white p-10 mt-10">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="about-us">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>
          With Sundarban Courier, We can make easy our daily life.
          </p>
          <p> 📍 24/25 Dilkusha</p>
          <p> 📍Motijheel,Dhaka-1000</p>
          <p>📞Phone: 09612003003</p>
          <p>✉️ support@courierservicesystem.com</p>
        </div>

        {/* Quick Links Section */}
        {/* <div className="quick-links">
          <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
          <ul>
            <li>
              <a href="/about" className="hover:text-indigo-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-indigo-300 transition">
              Noticeboard
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-indigo-300 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div> */}


           {/* Useful Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaHome className="text-lg" />
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBriefcase className="text-lg" />
              <a href="/service" className="hover:underline">Service</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBell className="text-lg" />
              <a href="/notice-board" className="hover:underline">Notice Board</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardList className="text-lg" />
              <a href="/apply-agency" className="hover:underline">Apply Agency</a>
            </li>
          </ul>
        </div>





        {/* Social Media Section */}
        {/* <div className="social-media">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div> */}

               {/* Our Services Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaTruck className="text-lg" />
              <a href="/courier-service" className="hover:underline">Courier Service</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBox className="text-lg" />
              <a href="/parcel-service" className="hover:underline">Parcel Service</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardList className="text-lg" />
              <a href="/value-declared" className="hover:underline">Value Declared</a>
            </li>
          </ul>
           {/* Additional Services Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaBox className="text-lg" />
              <a href="/ecom-service" className="hover:underline">E-com Service</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBuilding className="text-lg" />
              <a href="/corp-credit" className="hover:underline">Corp. Credit Service</a>
            </li>
          </ul>
        </div>
        
        </div>

       




        {/* Contact Info Section */}
        <div className="social-media">
          <h3 className="text-2xl font-semibold mb-4">Connect Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-8">
        <div className="text-center">
          <p>
            Copyright © {new Date().getFullYear()} Courier Service. All Rights
            Reserved.
          </p>
          <p>developed y Sharmoy Hashem Shawo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
