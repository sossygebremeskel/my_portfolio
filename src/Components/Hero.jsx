import about from "/me.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="home"
      className=" bg-gray-800  mx-auto overflow-hidden pb-2 py-10 px-3">
      <div className="flex flex-col items-center md:flex-row bg-gray-800 max-w-screen-lg mx-auto overflow-hidden pb-2">
        <div
          className="flex flex-col justify-center items-center md:items-start max-w-screen-lg mx-auto px-5 py-20 md:py-36 md:w-3/5"
          data-aos="fade-right">
          <h1 className="mb-4 text-xl font-bold tracking-tight leading-none text-white">
            <span className="text-primary font-bold">Hello,</span> Welcome
          </h1>
          <h1 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight leading-none text-white">
            I'm Sosna Gebremeskel
          </h1>
          <p className="mb-6 text-gray-100 text-lg text-center md:text-left">
            I am a passionate software engineer and  developer,
            specializing in front-end development. I create user-friendly
            websites and stay updated on the latest trends to deliver
            high-quality results.
          </p>
          <a
            href="#about"
            className="bg-primary text-white rounded-3xl py-2 px-6 font-medium shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
            About Me
          </a>

          <div className="flex space-x-6 mt-5">
            <a
              href="https://www.linkedin.com/in/sossy-gebremeskel-b34733326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300">
              <img
                src="https://img.icons8.com/?size=48&id=13930&format=png"
                alt="LinkedIn"
                className="h-10 w-10 transition-transform duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/sossygebremeskel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300">
              <img
                src="https://img.icons8.com/?size=48&id=32323&format=png"
                alt="Instagram"
                className="h-10 w-10 transition-transform duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.facebook.com/sossygebremeskel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300">
              <img
                src="https://img.icons8.com/?size=48&id=118497&format=png"
                alt="Facebook"
                className="h-10 w-10 transition-transform duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://t.me/sossygebremeskel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300">
              <img
                src="https://img.icons8.com/?size=48&id=63306&format=png"
                alt="Telegram"
                className="h-10 w-10 transition-transform duration-300 transform hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <div
            className="w-fit flex justify-center mx-auto lg:pl-10 "
            data-aos="fade-left">
            <img
              src={about}
              alt="About Us"
              className="w-80 h-96 rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
