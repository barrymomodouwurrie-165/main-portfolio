import {
  FaChartBar,
  FaDotCircle,
  FaCircle,
  FaCertificate,
} from "react-icons/fa";
import { FiTrendingUp, FiArrowRight } from "react-icons/fi";

const Descriptions = () => {
  const Info = [
    { id: "2", name: "university", content: "KNUST" },
    { id: "3", name: "major", content: "computer science" },
    { id: "4", name: "degree", content: "Bachelors degree" },
    { id: "5", name: "status", content: "Final Year" },
    { id: "6", name: "focus", content: ["Software Engineering", " &", " AI"] },
  ];
  const Milestones = [
    {
      id: "1",
      date: "2022/23",
      title: "Enrolled at KNUST",
      content:
        "Commenced Bachelor of Science in Computer Science, laying thefoundational groundwork in discrete mathematics and computational theory.",
      color: "Purple",
    },
    {
      id: "2",
      date: "2023/24",
      title: "Participated in a Mobile App Dev",
      content:
        "Collaborated with a cross-functional team to design and develop a mobile clone of the eBay application using React Native, replicating core e-commerce features such as product listings, search, and user navigation.",
      color: "Blue",
    },
    {
      id: "3",
      date: "current",
      title: "Final Year Project Phase",
      content:
        "An intelligent embedded security system that combines multi-factor authentication, real-time sensor correlation, and AI-based threat classification with an offline encrypted logging mechanism and a live web dashboard, in order to provide a resilient, affordable, and unbiased alternative to conventional single-factor access-control systems.",
      color: "Orange",
    },
  ];

  const BorderColors = {
    Purple: "border-purple-600 text-purple-600",
    Blue: "border-blue-600 text-blue-600",
    Orange: "border-orange-600 text-orange-600",
  };
  const TextColors = {
    Purple: "text-purple-600",
    Blue: "text-blue-600",
    Orange: "text-orange-600",
  };
  return (
    <div className="max-w-5xl mx-auto px-2 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-4">
        <div className="flex flex-col gap-8 border border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 p-4 md:p-6  rounded-lg bg-blue-950/10">
          <div className="flex items-center justify-between">
            <FaChartBar size={24} className="text-purple-600" />
            <span className="flex-1 text-2xl mx-4">Milestones</span>
            <div className="p-2 rounded-full border border-base-content/10">
              <FiTrendingUp size={32} className="text-base-content/30" />
            </div>
          </div>
          {Milestones &&
            Milestones.map((milestone) => {
              return (
                <div key={milestone.id} className="flex items-start">
                  <div
                    className={`rounded-full border border-s-4 p-2 ${BorderColors[milestone.color]} translate-y-4 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300`}
                  >
                    {" "}
                    <FaDotCircle />
                  </div>
                  <div className="flex flex-col gap-2 mx-4">
                    <span className={`${TextColors[milestone.color]}`}>
                      {milestone.date}
                    </span>
                    <span className="text-xl font-bold">{milestone.title}</span>
                    <p className="text-base-content/70">{milestone.content}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-mono border border-orange-600/5 rounded-lg bg-blue-950/10 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300">
            <div className="flex items-center justify-between bg-base-content/20 border-b border-base-content/10 rounded-t-lg px-6 py-2">
              <div className="flex items-center gap-2">
                <FaCircle size={14} className="text-orange-600" />
                <FaCircle size={14} className="text-yellow-600" />
                <FaCircle size={14} className="text-green-600" />
              </div>
              <span className="text-sm md:text-base flex-1 text-center">
                cat academic_info.json
              </span>
            </div>
            <div className="py-8 px-6">
              <div className="px-4 py-2">
                <span>&#123;</span>
                {Info &&
                  Info.map((info) => {
                    return (
                      <div key={info.id} className="flex md:items-center px-3">
                        <span className="text-orange-600 text-xs md:text-lg">
                          "{info.name}"
                        </span>
                        <span className="mr-2 text-xs md:text-lg">:</span>
                        <span className="text-secondary text-xs md:text-lg">
                          "{info.content}"
                        </span>
                        <span className=" text-xs md:text-lg">,</span>
                      </div>
                    );
                  })}
                <span>&#125;</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-lg mt-2">
                <FiArrowRight className="text-green-600" />
                <span className="text-blue-600 animate-pulse">~</span>
                <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="border border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 p-4 md:p-6  rounded-lg bg-blue-950/10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <FaCertificate className="text-purple-600" />
                <span className="text-xl font-bold mx-4">
                  Core Competencies
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span>Coding</span>
                  <span>90%</span>
                </div>
                <div className="w-full border border-base-content/5 h-[10px] rounded-md">
                  <div className="w-[90%] bg-blue-600 h-[9px] rounded-l-md"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span>Problem Solving</span>
                  <span>88%</span>
                </div>
                <div className="w-full border border-base-content/5 h-[10px] rounded-md">
                  <div className="w-[88%] bg-green-600 h-[9px] rounded-l-md"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span>Algorithms</span>
                  <span>86%</span>
                </div>
                <div className="w-full border border-base-content/5 h-[10px] rounded-md">
                  <div className="w-[86%] bg-orange-600 h-[9px] rounded-l-md"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span>Attention To Details</span>
                  <span>93%</span>
                </div>
                <div className="w-full border border-base-content/5 h-[10px] rounded-md">
                  <div className="w-[93%] bg-secondary h-[9px] rounded-l-md"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span>Team Work</span>
                  <span>90%</span>
                </div>
                <div className="w-full border border-base-content/5 h-[10px] rounded-md">
                  <div className="w-[90%] bg-purple-600 h-[9px] rounded-l-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
