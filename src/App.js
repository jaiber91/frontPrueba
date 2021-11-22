import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/headerFooter/Footer";
import Header from "./Components/headerFooter/Header";
import AddProject from "./pages/addProject/AddProject";
import { ShowProjects } from "./pages/showProjects/showProjects";
import CreateAnnouncement from "./pages/announcement/CreateAnnouncement";
import { Announcements } from "./pages/announcement/Announcements";
import Error404 from "./Components/404/Error404";
//import { GetAnnounce } from "./components/crearAnuncio/GetAnnounce";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/crearProyecto" element={<AddProject />} />
          <Route path="/proyectos" element={<ShowProjects />} />
          <Route path="/crearAnuncio" element={<CreateAnnouncement />} />
          <Route path="/anuncios" element={<Announcements />} />
          <Route path="*" element={<Error404 />} />

          {/*  <Route path="/proyecto" element={<GetAnnounce />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
