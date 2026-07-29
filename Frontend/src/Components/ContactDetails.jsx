import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaTerminal,
  FaVolumeUp,
  FaShareAlt,
  FaArrowRight,
} from "react-icons/fa";
import Map from "../assets/map.png";
import { Link } from "react-router";

const ContactDetails = () => {
  const Socials = [
    {
      id: 1,
      logo: "FaShareAlt",
      name: "LinkedIn",
    },
    {
      id: 2,
      logo: "FaTerminal",
      name: "GitHub",
    },
    {
      id: 3,
      logo: "FaVolumeUp",
      name: "Twitter",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        <div className="p-10 border border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 md:p-6  rounded-lg bg-blue-950/10">
          <div className="card gap-4">
            <div className="flex items-center justify-between gap-2 lg:gap-0">
              <div>
                <label className="label">
                  <span className="label-text font-bold">NAME</span>
                </label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">EMAIL</span>
                </label>
                <input type="email" className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold ">MESSAGE</span>
              </label>
              <textarea
                type="text"
                rows="60"
                className="input input-bordered w-full max-h-[200px] md:max-h-[300px] min-h-[100px] md:min-h-[300px] pt-2"
                placeholder="How can we push the bounderies together?"
              />
            </div>
            <div className="card-actions my-4 ">
              <button className="btn btn-secondary w-full font-bold">
                {" "}
                <FaPaperPlane /> TRANSMIT SIGNAL
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 overflow-hidden rounded-lg bg-blue-950/10">
            <img
              src={Map}
              alt=""
              className="w-[100%] h-[300px] object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="flex items-start my-6 ml-6">
              <div className="p-2 mr-2 rounded-lg bg-purple-600">
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl">Nexus Point</span>
                <span className={`text-base-content/70`}>
                  KNUST Campus, Kumasi, Ghana
                </span>
                <p className="text-blue-600">6.6748° N, 1.5716° W</p>
              </div>
            </div>
          </div>
          <div className="border border-orange-600/5 hover:shadow-[0_0_20px_rgba(210,187,255,0.15)] transition-shadow duration-300 rounded-lg bg-blue-950/10">
            <div className="flex flex-col gap-4 p-6">
              <span className="md:text-xl font-bold">NETWORK NODES</span>
              {Socials &&
                Socials.map((social) => {
                  return (
                    <Link
                      key={social.id}
                      className="bg-orange-600/5 rounded-md hover:outline outline-2 outline-orange-600/20 px-2 py-4"
                    >
                      <div className="flex items-center justify-between px-4">
                        {social.logo === "FaShareAlt" ? (
                          <FaShareAlt size={24} className="text-purple-600" />
                        ) : social.logo === "FaTerminal" ? (
                          <FaTerminal
                            size={24}
                            className="text-purple-600 outline"
                          />
                        ) : (
                          <FaVolumeUp size={24} className="text-purple-600" />
                        )}

                        <p className="flex-1 ml-6 font-bold">{social.name}</p>
                        <FaArrowRight size={24} className="" />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
