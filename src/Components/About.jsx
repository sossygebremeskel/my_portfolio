import bg from "/bg.png";

function About() {
  return (
    <div
      id="about"
      className="flex items-center justify-center pt-20  mx-auto bg-gray-800">
      <div className="max-w-4xl mx-auto p-4  rounded-lg shadow-x-lg px-3">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">
          About <span className="text-4xl font-bold text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-">
          <img
            src="/her.jpg"
            alt="Sosna Gebremeskel"
            className="w-44 h-44 rounded-3xl mr-6 object-cover mb-5 md:mb-0"
          />
          <div>
            <p className="text-lg text-gray-200 mb-2 text-center md:text-start md:pt-5">
              Hi, I'm Sosna Gebremeskel, a passionate Developer
              specializing in Front-End Development. I create responsive and
              interactive web applications that provide exceptional user
              experiences.
            </p>
            <p className="text-lg text-gray-200 mb-2 text-center md:text-start md:pt-4">
              I am currently available for freelance projects. My goal is to
              help businesses succeed by delivering high-quality solutions
              tailored to their needs.
            </p>
          </div>
        </div>

        <div className=" shadow-sm mt-2 shadow-gray-600 py-3 px-5 text-center md:text-start">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">
            Education
          </h3>
          <p className="text-lg text-gray-300 mb-2">
            4th year student of Software Engineering
          </p>
          <p className="text-gray-200">Mekelle, Ethiopia</p>
        </div>

        <div className="mt-4 shadow-sm shadow-gray-600 rounded-lg py-3 px-5 text-center md:text-start">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">
            Contact Information
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>
              <strong>Phone:</strong> +251953166208| +251970822721
            </li>
            <li>
              <strong>Email:</strong>
              <a
                href="mailto:Sossygebremeskel@gmail.com"
                className="text-[#E3A57F]  hover:underline">
                {" "}
                Sossygebremeskel@gmail.com
              </a>
            </li>
            <li>
              <strong>Address:</strong> Mekelle, Ethiopia
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-4">
          <a
            href="https://drive.google.com/file/d/1MUDCPHXVQqPJAPOgup5fUdW4bzTDp4vo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white py-2 px-6 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
            Download cv
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
