import Nav from "./components/Nav";
import AboutMePage from "./components/AboutMe/AboutMePage"
import ExperiencePage from "./components/Experience/ExperiencePage"
import ProjectsPage from "./components/Projects/ProjectsPage"
import VersionLogPage from "./components/VersionLog/VersionLogPage"
import FormPage from "./components/Form/FormPage"
import NotesPage from "./components/Notes/NotesPage"
import {Route, Routes} from "react-router-dom"
import ToDoPage from "./components/ToDo/ToDoPage";
import SearchBarPage from "./components/SearchBar/SearchBarPage";
import EcomPage from "./components/Ecom/EcomPage";
import AddBasketPage from "./components/AddBasket/AddBasketPage";
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
          <Route path="app/Notes" element={<NotesPage />} />
          <Route path="app/ToDo" element={<ToDoPage />} />
          <Route path="app/Search" element={<SearchBarPage />} />
          <Route path="app/Prod" element={<EcomPage />} />
          <Route path="app/Basket" element={<AddBasketPage />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
