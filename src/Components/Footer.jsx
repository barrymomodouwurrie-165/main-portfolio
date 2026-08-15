import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#1a103d] w-full p-4 border-t border-purple-400/20 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-2">
        <div className="flex flex-col gap-2">
          <span className="bg-gradient-to-t from-[#c7d2fe] to-primary bg-clip-text text-base md:text-xl text-transparent">
           BARRY_DEV
          </span>
          <p className="text-base-content/70 font-mono">&copy; 2026 Intellectual Cyberpunk. Built with CS Precision. </p>
        </div>
        <div className="flex items-center justify-between">
          <Link className="btn btn-ghost btn-sm">GitHub</Link>
          <Link className="btn btn-ghost btn-sm">LinkedIn</Link>
          <Link className="btn btn-ghost btn-sm">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
