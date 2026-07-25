import { FaCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Details = () => {
  const Info = [
    { id: "1", name: "name", content: "Momodou Wurrie Barry" },
    { id: "2", name: "university", content: "KNUST" },
    { id: "3", name: "major", content: "computer science" },
    { id: "4", name: "degree", content: "Bachelors degree" },
    { id: "5", name: "focus", content: ["Software Engineering", " &", " AI"] },
    { id: "6", name: "philosophy", content: "Optimize everything." },
    { id: "7", name: "email", content: "barrymomodouwurry165@gmail.com" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-2 py-8">
      <div className="font-mono border border-base-content/5 rounded-lg bg-blue-950/10 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300">
        <div className="flex items-center justify-between bg-base-content/20 border-b border-base-content/10 rounded-t-lg px-6 py-2">
          <div className="flex items-center gap-2">
            <FaCircle size={18} className="text-orange-600" />
            <FaCircle size={18} className="text-yellow-600" />
            <FaCircle size={18} className="text-green-600" />
          </div>
          <span className="flex-1 text-center">
            momodou_barry — -zsh — 80×24
          </span>
        </div>
        <div className="py-8 px-6">
          <div className="flex items-center gap-2 md:text-lg">
            <FiArrowRight className="text-green-600" />
            <span className="text-blue-600">~</span>
            <span className="text-purple-500">cat</span>
            <span>info.json</span>
          </div>
          <div className="px-4 py-2">
            <span>&#123;</span>
            {Info &&
              Info.map((info) => {
                return (
                  <div key={info.id} className="flex md:items-center px-4">
                    <span className="text-orange-600 md:text-lg">
                      "{info.name}"
                    </span>
                    <span className="mr-2 text-lg">:</span>
                    <span className="text-secondary md:text-lg">
                      "{info.content}"
                    </span>
                    <span className=" text-lg">,</span>
                  </div>
                );
              })}
            <span>&#125;</span>
          </div>
          <div className="flex items-center gap-2 md:text-lg py-2">
            <FiArrowRight className="text-green-600" />
            <span className="text-blue-600">~</span>
            <span className="text-purple-500">ls</span>
            <span>projects/</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between px-6 mr-8">
            <span className="text-secondary md:text-lg">distributed_sys/</span>
            <span className="text-secondary md:text-lg">
              knust_portal_redesign/
            </span>
            <span className="text-secondary md:text-lg">api_gateway_v1/</span>
            <span className="text-secondary md:text-lg">neural_net_lab/</span>
          </div>
          <div className="flex items-center gap-2 text-lg mt-2">
            <FiArrowRight className="text-green-600" />
            <span className="text-blue-600 animate-pulse">~</span>
            <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
