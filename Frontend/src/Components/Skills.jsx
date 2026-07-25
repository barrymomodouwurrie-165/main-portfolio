import { FaReact, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { FiCloud, FiBox, FiTerminal } from "react-icons/fi";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 py-6">
      <div className="flex items-center justify-between gap-4">
        <div className=" flex-1 border border-base-content/5"></div>
        <span className="text-4xl text-orange-500 font-bold">TECH_STACK</span>
        <div className=" flex-1 border border-base-content/5"></div>
      </div>
      <div className="flex flex-col gap-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-4">
          <div className="md:max-w-[500px] flex flex-col border  border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 p-6  rounded-lg bg-blue-950/10 ">
            <div className="flex items-start justify-between">
              <div className="p-4 border rounded-md border-secondary/20 bg-blue-600/10 text-blue-600">
                <FaReact size={34} />
              </div>
              <span className="font-mono">full stack Architecture</span>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-2xl font-bold">Reactjs & Expressjs</span>
              <span className="text-base-content/70">
                Building performant, SEO-optimized user interfaces with modern
                React patterns and Tailwind CSS.
              </span>
            </div>
          </div>
          <div className="flex flex-col border border-orange-600/5 p-6 rounded-lg bg-blue-950/10 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 ">
            <div className="flex items-start justify-between">
              <div className="p-4 text-orange-600 border border-orange-500/20 rounded-md bg-orange-500/10">
                <FaPython size={34} />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-2xl font-bold">Python</span>
              <span className="text-base-content/70">
                Data science and automation scripts for technical research.
              </span>
            </div>
          </div>
          <div className="flex flex-col border border-orange-600/5 p-6 rounded-lg bg-blue-950/10 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 ">
            <div className="flex items-start justify-between">
              <div className="p-4 text-purple-600 rounded-md border border-purple-500/20 bg-purple-500/10">
                <FaJava size={34} />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-2xl font-bold">Java</span>
              <span className="text-base-content/70">
                Enterprise-grade backend solutions and academic data structures.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
          <div className="flex flex-col border  border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 p-6  rounded-lg bg-blue-950/10 ">
            <div className="flex items-start justify-between">
              <div className="p-4 text-green-600 rounded-md border border-green-600/20 bg-green-600/20">
                <FaDatabase size={34} />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-2xl font-bold">Databases</span>
              <span className="text-base-content/70">
                PostgreSQL, MongoDB, and Redis implementation.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between border border-orange-600/5 p-6 rounded-lg bg-blue-950/10 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-30 ">
            <div className=" flex flex-col gap-4 mt-6">
              <span className="text-2xl font-bold">Cloud & Deployment</span>
              <span className="text-base-content/70">
                CI/CD pipelines with GitHub Actions, containerization via
                Docker, and cloud hosting on AWS.
              </span>
            </div>
            <div className="flex ml-20">
              <div className="p-4 bg-base-100 text-purple-600 border border-black rounded-full relative z-10 ">
                <FiCloud size={24} />
              </div>
              <div className="p-4 bg-base-100 text-secondary border border-black rounded-full -translate-x-4 relative z-20">
                <FiBox size={24} />
              </div>
              <div className="p-4 bg-base-100 text-orange-600 border border-black rounded-full -translate-x-8 relative z-30 ">
                <FiTerminal size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
