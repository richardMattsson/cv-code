import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProjectsAndTechStack from "./components/ProjectsAndTechStack";

function App() {
  return (
    <div className="cv-container">
      <Header />
      <hr className="divider" />
      <Intro />
      <div className="content-container">
        <ProjectsAndTechStack />
        <Experience />
      </div>
    </div>
  );
}

export default App;
