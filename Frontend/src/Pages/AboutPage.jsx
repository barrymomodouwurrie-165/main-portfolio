import { FaGraduationCap } from "react-icons/fa";
import Descriptions from "../Components/Descriptions";
import Navbar from "../Components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen mx-auto pt-32 overflow-hidden">
      <Navbar />
      <div className=" max-w-5xl mx-auto flex flex-col gap-6 mt-4 mb-8">
        <div className="max-w-[250px] flex items-center justify-center gap-2 border border-orange-600/20 rounded-lg text-center py-2 bg-orange-600/5 text-orange-600 ">
          <FaGraduationCap />
          <span>ACADEMIC ODESSEY</span>
        </div>
        <div className="flex items-center font-bold">
          <span className="inline-block leading-[1.3] pb-1 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-secondary to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl md:text-6xl text-transparent">
            From Lab to Logic
          </span>
        </div>
        <span className="max-w-[550px]">
          Exploring the intersection of theoretical computer science and
          pragmatic software engineering. Currently pursuing excellence at Kwame
          Nkrumah University of Science and Technology.
        </span>
      </div>
      <Descriptions />
    </div>
  );
};

export default AboutPage;
