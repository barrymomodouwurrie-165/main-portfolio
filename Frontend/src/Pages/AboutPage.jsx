import { FaGraduationCap } from "react-icons/fa";
import Descriptions from "../Components/Descriptions";
import Navbar from "../Components/Navbar";
import library from "../assets/library.jpg"
import computer from "../assets/computer.jpg"
import Footer from "../Components/Footer";

const AboutPage = () => {
    const Projects = [
      {
        id: 1,
        image: "library",
        title: "Computational Lab",
        subTitle:
          "Where theory meets the metal. Spending nights optimizing kernel-level tasks.",
      },
      {
        id: 2,
        image: "computer",
        title: "Logic Design Room",
        subTitle:
          "Drafting the blueprints for the next generation of decentralised apps.",
      },
    ];
  return (
    <div className="min-h-screen mx-auto pt-32 overflow-hidden">
      <Navbar />
      <div className=" max-w-5xl mx-auto flex flex-col gap-6 mt-4 mb-8">
        <div className="max-w-[250px] flex items-center justify-center gap-2 border border-orange-600/20 rounded-lg text-center py-2 bg-orange-600/5 text-orange-600 ">
          <FaGraduationCap />
          <span>ACADEMIC ODYSSEY</span>
        </div>
        <div className="flex items-center font-bold">
          <span className="inline-block leading-[1.3] pb-1 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-secondary to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl md:text-6xl text-transparent">
            From <i>Lab</i> to Logic
          </span>
        </div>
        <span className="max-w-[550px]">
          Exploring the intersection of theoretical computer science and
          pragmatic software engineering. Currently pursuing excellence at Kwame
          Nkrumah University of Science and Technology.
        </span>
      </div>
      <Descriptions />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {Projects &&
          Projects.map((project) => {
            return (
              <div
                key={project.id}
                className="h-[300px] overflow-hidden rounded-lg mb-20"
              >
                <img
                  src={
                    project.image == "library"
                      ? library
                      : computer
                  }
                  alt=""
                  className="w-[100%] h-[300px] object-center transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="relative bottom-20 left-4">
                  <div
                    className={`rounded-md font-bold`}
                  >
                    {project.title}
                  </div>
                  <span
                    className={`text-base md:text-xl font-bold`}
                  >
                    {project.subTitle}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
