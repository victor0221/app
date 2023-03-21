import Nav from "./components/Nav";
import AboutMePage from "./components/AboutMe/AboutMePage"
import ExperiencePage from "./components/Experience/ExperiencePage"
import ProjectsPage from "./components/Projects/ProjectsPage"
import VersionLogPage from "./components/VersionLog/VersionLogPage"
import FormPage from "./components/Form/FormPage"
import {Route, Routes} from "react-router-dom"
function App() {
  
  return (
    <>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/app" element={<AboutMePage />} />
          <Route path="app/AboutMe" element={<AboutMePage />} />
          <Route path="app/Experience" element={<ExperiencePage />} />
          <Route path="app/Projects" element={<ProjectsPage />} />
          <Route path="app/VersionLog" element={<VersionLogPage />} />
          <Route path="app/Form" element={<FormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
