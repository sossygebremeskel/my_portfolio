import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import {
  FaCode,
  FaDatabase,
  FaPaintBrush,
  FaShoppingCart,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="services" className="py-16 bg-gray-800  mx-auto">
      <div className=" max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">
          My <span className="text-4xl font-bold text-primary">Services</span>
        </h2>
        <div className="pl-5 grid grid-cols-1 pt-6 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div data-aos="fade-right">
            <div className="shadow-sm shadow-gray-600 rounded-lg  p-6 transition-transform duration-300 hover:scale-105">
              <div className="text-6xl bg-gradient-to-r -ml-14 -mt-12 from-blue-500 to-purple-500 text-white p-4 rounded-full inline-block mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Web Development
              </h3>
              <p className="text-gray-300 mb-4">
                I build responsive and interactive websites using the latest
                technologies, ensuring a seamless user experience across all
                devices.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>HTML, CSS, JavaScript</li>
                <li>TailwindCSS, ReduxJS, React, Next.js Angular</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="shadow-sm shadow-gray-600 rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            data-aos="fade-up">
            <div className="text-5xl -ml-14 -mt-12 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-full inline-block mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Back-End Development
            </h3>
            <p className="text-gray-300 mb-4">
              I develop robust client-side applications and APIs that power your
              web applications and ensure efficient data management.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Node.js, Express</li>
              <li>Database Management (MongoDB)</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div
            className="shadow-sm shadow-gray-600 rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            data-aos="fade-left">
            <div className="text-5xl -ml-14 -mt-12 bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-full inline-block mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-300 mb-4">
              I create user-friendly interfaces with a focus on usability and
              aesthetics, ensuring your application is both functional and
              visually appealing.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Wireframing & Prototyping</li>
              <li>User Research & Testing</li>
            </ul>
          </div>

        

         

         
           
          </div>
        </div>
      </div>
    
  );
}

export default Services;
