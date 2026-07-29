import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProjectWorks from "../Components/ProjectWorks";

const Projects = () => {
  return (
    <div className="min-h-screen mx-auto pt-32 overflow-hidden">
      <Navbar />
      <div className="max-w-5xl mx-auto flex flex-col gap-4 mt-4 mb-8">
        <div className="flex items-center">
          <div className="border border-purple-600 flex-1 max-w-14"></div>
          <span className="text-secondary font-serif ml-4">
            PORTFOLIO SHOWCASE
          </span>
        </div>
        <div className="flex items-center font-bold">
          <span className="inline-block leading-[1.3] pb-1 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-secondary to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl md:text-6xl text-transparent">
            Selected Works
          </span>
        </div>
        <p className="max-w-[550px] text-base-content/70">
          Exploring the intersection of complex algorithms and real-world impact
          through digital craftsmanship and precision engineering.
        </p>
      </div>
      <ProjectWorks />
      <Footer />
    </div>
  );
};

export default Projects;
