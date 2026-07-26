import Job from "../assets/JobDashboard.png";
import Security from "../assets/IntelliDashboard.png";
import School from "../assets/AdminDashboard.png";

const Works = () => {
  const Projects = [
    {
      id: 1,
      image: "Job",
      title: "MINI_PROJECT",
      subTitle: "AI Job Search Portal",
      description:
        "AI POWERED JOB PORTAL WITH AUTOMATED RESUME SCREENING AND PERSONALIZED JOB RECOMMENDATIONS",
      tools: ["ReactJs", "CSS", "ExpressJs"],
      color: "Blue",
    },
    {
      id: 2,
      image: "Security",
      title: "FINAL_YEAR_PROJECT",
      subTitle: "Dashboard monitor",
      description:
        "AN INTELLIGENT EMBEDDED SECURITY SYSTEM WITH REAL-TIME THREAT CLASSIFICATION",
      tools: ["ReactJs", "Tailwind", "ExpressJs", "Java"],
      color: "Orange",
    },
    {
      id: 3,
      image: "School",
      title: "MANAGEMENT SYSTEM",
      subTitle: "School Website management system",
      description:
        "A WEB-BASED INTELLIGENT SCHOOL MANAGEMENT SYSTEM WITH REAL-TIME ATTENDANCE, RESULT PROCESSING AND PARENT NOTIFICATION",
      tools: ["ReactJs", "Tailwind", "ExpressJs"],
      color: "Green",
    },
  ];

  const BgColors = {
    Blue: "bg-blue-600/20 border border-blue-600/30 text-blue-600",
    Orange: "bg-orange-600/10 border border-orange-600/20 text-orange-600",
    Green: "bg-green-600/20 border border-green-600/30 text-green-600",
  };
  const ToolColors = {
    Blue: "bg-blue-600/50 border border-blue-600/10",
    Orange: "bg-orange-600/50 border border-orange-600/10",
    Green: "bg-green-600/50 border border-green-600/10",
  };
  const TextColors = {
    Blue: "text-blue-600",
    Orange: "text-orange-600",
    Green: "text-green-600",
  };

  return (
    <div className="max-w-5xl mx-auto px-2 py-14">
      <div className="flex items-center justify-between mb-10">
        <span className="text-lg md:text-2xl font-bold">Featured Work</span>
        <div className="border border-secondary/10 flex-1 ml-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Projects &&
          Projects.map((project) => {
            return (
              <div
                key={project.id}
                className="relative overflow-hidden hover:border hover:border-secondary/10 hover:rounded-lg hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300"
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
                <div className="absolute bottom-40 left-6">
                  <div
                    className={`p-2 ${BgColors[project.color]} max-w-[200px] rounded-md text-center font-bold`}
                  >
                    {project.title}
                  </div>
                  <span
                    className={`text-base md:text-xl font-bold ${TextColors[project.color]}`}
                  >
                    {project.subTitle}
                  </span>
                </div>
                <div className="flex flex-col gap-6 my-4 ml-2">
                  <span className="text-sm md:text-lg">{project.description}</span>
                  <div className="flex items-center gap-4">
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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Works;
