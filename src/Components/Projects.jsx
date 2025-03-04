import p1 from "/project1.png";
import p2 from "/project2.png";
import p3 from "/project3.png";
import p4 from "/project4.png";
import p5 from "/project5.png";
import p6 from "/project6.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  const projectList = [
    {
      title: "SOS SCHOOL",
      description:
        "SOS SCHOOL is a php project that allows students to register and enroll and it also has payment module.",
      imageUrl: p6,
      githubLink:"https://github.com/kua-University/student_regstration_sos.git",
      websiteLink: "https://",
    },
    {
      title: "MODERN ONLINE FOOD",
      description:
        "Asset Marketsquare is an Ethiopian marketplace that connects brokers for buying, selling, or renting cars and homes efficiently.",
      imageUrl: p1,
      githubLink: "https://github.com/sossygebremeskel/student_management_system.git",
      websiteLink: "https://",
    },

    {
      title: "Banking system",
      description:
        " Banking system made with java",
      githubLink: "https://",
      websiteLink: "https://",
    },
    {
      title: "My Portfolio",
      description:
        "My Portfolio Website showcases my skills, projects, and achievements as a developer. It highlights my expertise through interactive design, project demos, and links to my work, providing a glimpse into my passion for building impactful and innovative solutions.",
      imageUrl: p5,
      websiteLink: "https://yordanostibebu.vercel.app/",
    },
    {
      title: "Tour And Travel",
      description:
        "YMS Tour and Travel Website isweb application built using PHP.",
      imageUrl: p3,
      githubLink: "https://github.com/sossygebremeskel/Tour-and-Travel.git",
      websiteLink: "https://",
    },
    {
      title: "My ToDo ",
      description:
        "My To-Do App is a simple and intuitive platform to help you organize your tasks and stay productive. Easily add, edit, and track your daily goals with this user-friendly tool.",
      imageUrl: p4,
      githubLink: "https://github.com/sossygebremeskel/todo_.git",
      websiteLink: "https://",
    },
  ];

  return (
    <div id="projects" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-8">
          Latest{" "}
          <span className="text-4xl font-bold text-primary">Projects</span>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up">
          {projectList.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-sm shadow-gray-600 overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-300 rounded-full hover:text-gray-200 transition duration-300">
                      <img
                        src="https://cdn-icons-png.freepik.com/256/903/903482.png?semt=ais_hybrid"
                        className="h-6"
                        alt=""
                      />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-300 rounded-full hover:text-gray-200 transition duration-300">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        className="h-6"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
