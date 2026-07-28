import { FaTerminal } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import ContactDetails from "../Components/ContactDetails";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen mx-auto pt-32 overflow-hidden">
      <Navbar />
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 py-8">
        <div className="flex items-center justify-center gap-2 border border-orange-600/20 bg-orange-600/5 text-orange-600 rounded-md px-4 py-2">
          <FaTerminal className="outline" />
          <span>system.status: listening</span>
        </div>
        <div className="flex items-center font-bold">
          <span className="inline-block leading-[1.3] pb-1 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-secondary to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl md:text-6xl text-transparent">
            Let's Collaborate
          </span>
        </div>
        <p className="max-w-[600px] text-center text-base-content/70">
          Have a challenging problem to solve? I'm currently open to innovative
          projects and full-stack opportunities.
        </p>
      </div>
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contact;
