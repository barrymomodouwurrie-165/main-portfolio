import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import {Routes, Route} from "react-router"
import "./App.css";

function App() {
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
    <div data-theme="synthwave" className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage Info={Info} />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
