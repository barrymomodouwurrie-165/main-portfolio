import Job from "../assets/JobDashboard.png";
import Security from "../assets/IntelliDashboard.png";
import School from "../assets/AdminDashboard.png";
import {
  FaBriefcase,
  FaShieldAlt,
  FaUserCog,
  FaCheckCircle,
  FaSpinner,
  FaTerminal,
} from "react-icons/fa";

const ProjectWorks = () => {
  const Projects = [
    {
      id: 1,
      image: "Job",
      subTitle: "AI Job Search Portal",
      icon_one: "FaBriefcase",
      status: "In-Progress",
      icon_two: "FaSpinner",
      description:
        "AI POWERED JOB PORTAL WITH AUTOMATED RESUME SCREENING AND PERSONALIZED JOB RECOMMENDATIONS.",
      tools: ["ReactJs", "CSS", "ExpressJs"],
      color: "Blue",
    },
    {
      id: 2,
      image: "Security",
      subTitle: "Dashboard Monitor",
      icon_one: "FaShieldAlt",
      status: "Verified",
      icon_two: "FaCheckCircle",
      description:
        "AN INTELLIGENT EMBEDDED SECURITY SYSTEM WITH REAL-TIME THREAT CLASSIFICATION.",
      tools: ["ReactJs", "Tailwind", "ExpressJs", "Java"],
      color: "Orange",
    },
    {
      id: 3,
      image: "School",
      subTitle: "School Website Management System",
      icon_one: "FaUserCog",
      status: "In-Progress",
      icon_two: "FaSpinner",
      description:
        "A WEB-BASED INTELLIGENT SCHOOL MANAGEMENT SYSTEM WITH REAL-TIME ATTENDANCE, RESULT PROCESSING AND PARENT NOTIFICATION.",
      tools: ["ReactJs", "Tailwind", "ExpressJs"],
      color: "Green",
    },
  ];
  const ToolColors = {
    Blue: "bg-blue-600/50 border border-blue-600/10 text-blue-600",
    Orange: "bg-orange-600/50 border border-orange-600/10 text-orange-600",
    Green: "bg-green-600/50 border border-green-600/10 text-green-600",
  };
  return (
    <div className="max-w-5xl mx-auto py-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Projects &&
          Projects.map((project) => {
            return (
              <div
                key={project.id}
                className="relative overflow-hidden border border-secondary/10 rounded-lg hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 pb-4"
              >
                <img
                  src={
                    project.image == "Job"
                      ? Job
                      : project.image == "Security"
                        ? Security
                        : project.image == "School"
                          ? School
                          : ""
                  }
                  alt=""
                  className="w-[100%] h-[300px] rounded-t-lg object-center transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="flex items-center gap-4 absolute top-4 right-6">
                  <span
                    className={`rounded-md px-2 ${ToolColors[project.color]}`}
                  >
                    {project.tools[0]}
                  </span>
                  <span
                    className={`rounded-md px-2 ${ToolColors[project.color]}`}
                  >
                    {project.tools[1]}
                  </span>
                  <span
                    className={`rounded-md px-2 ${ToolColors[project.color]}`}
                  >
                    {project.tools[2]}
                  </span>
                </div>

                <div className="flex flex-col gap-4 mt-6 mx-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl md:text-3xl font-bold ">
                      {project.subTitle}
                    </span>
                    <div className="text-purple-600">
                      {project.icon_one == "FaBriefcase" ? (
                        <FaBriefcase size={18} />
                      ) : project.icon_one == "FaShieldAlt" ? (
                        <FaShieldAlt size={18} />
                      ) : (
                        <FaUserCog size={18} />
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-base-content/70">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-purple-600/10">
                    <div className="flex items-center text-base-content/70">
                      {project.icon_two == "FaCheckCircle" ? (
                        <FaCheckCircle size={18} />
                      ) : (
                        <FaSpinner size={18} />
                      )}
                      <span className="ml-2">{project.status}</span>
                    </div>
                    <div >
                      <button className="btn btn-outline btn-sm text-purple-600">
                        <span>VIEW CODE</span>
                        <FaTerminal size={18} className="hover:outline" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectWorks;
