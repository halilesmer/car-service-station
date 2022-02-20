
import { Route, Routes } from "react-router-dom";

import KfzService from "./Components/KfzService";
import Services from "./Components/Services";
import Impressum from "./Components/Impressum";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <div id="main-container">
      <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/" element={<KfzService />} />
          </Routes>
          </div>
    </>
  );
}

export default App;
