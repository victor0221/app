import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe/AboutMePage"
import Experience from "./components/Experience/ExperiencePage"
import Projects from "./components/Projects/ProjectsPage"
import VersionLog from "./components/VersionLog/VersionLogPage"
import {Route, Routes} from "react-router-dom"
function App() {
  
  return (
    <>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/app" element={<AboutMe />} />
          <Route path="app/AboutMe" element={<AboutMe />} />
          <Route path="app/Experience" element={<Experience />} />
          <Route path="app/Projects" element={<Projects />} />
          <Route path="app/VersionLog" element={<VersionLog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
