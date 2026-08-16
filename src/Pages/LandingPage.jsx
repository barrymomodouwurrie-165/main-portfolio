import Navbar from "../Components/Navbar";
import { FaCircle } from "react-icons/fa";
import Skills from "../Components/Skills";
import { HiChevronDoubleDown } from "react-icons/hi";
import Details from "../Components/Details";
import Footer from "../Components/Footer";
import Works from "../Components/Works";
import { Link } from "react-router";
import TextType from "../TextType";

const LandingPage = ({ Info }) => {
  return (
    <div className="min-h-screen mx-auto pt-40 overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center text-center py-10">
        <div className="flex items-center gap-2 mx-auto text-orange-500 border border-orange-600/20 bg-orange-200/10 px-4 rounded-3xl font-mono">
          <FaCircle
            size={10}
            className="text-green-600 animate-pulse shadow-lg shadow-green-500"
          />{" "}
          Available for junior dev role
        </div>
        <div className="flex items-center font-bold text-2xl md:text-5xl py-6">
          <TextType
            text={[
              "MOMODOU WURRIE BARRY",
              "Junior Developer",
              "Software Engineer",
            ]}
            textColors={["oklch(0.78 0.12 227.37)"]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="..."
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>
        <p className="text-center max-w-2xl">
          Final year Computer Science student at KNUST. Building the future with
          code, specializing in high-performance distributed systems and modern
          web architectures.
        </p>
        <div className="max-w-xl mx-auto flex items-center justify-between gap-4 py-6">
          <Link
            to={"/projects"}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex z-0 h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 md:px-8 py-1 text-xl font-medium text-secondary backdrop-blur-3xl">
              See my work
            </span>
          </Link>
          <button className="inline-flex h-12 items-center justify-center rounded-md text-xl border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-4 md:px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 ">
            Download CV
          </button>
        </div>
      </div>
      <HiChevronDoubleDown
        size={24}
        className="relative mx-auto animate-bounce mb-[100px] z-0"
      />
      <Skills />
      <Details Info={Info} />
      <Works />
      <Footer />
    </div>
  );
};

export default LandingPage;
