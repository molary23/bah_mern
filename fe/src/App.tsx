import "./styles/style.css";

import { Routes, Route } from "react-router-dom";

import OutletComponent from "./components/Outlet";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages";
import Equipment from "./pages/products/equipments";
import Pallets from "./pages/products/pallets";
import Power from "./pages/products/power";
import Racking from "./pages/products/racking";
import Shelves from "./pages/products/shelves";
import Spares from "./pages/products/spares";

import Consultancy from "./pages/services/consultancy";
import Distilled from "./pages/services/distilled-water";
import Logistics from "./pages/services/logistics";
import Maintenance from "./pages/services/maintenance";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="" element={<OutletComponent />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/equipments" element={<Equipment />} />
        <Route path="/products/pallets" element={<Pallets />} />
        <Route path="/products/power" element={<Power />} />
        <Route path="/products/racking" element={<Racking />} />
        <Route path="/products/shelves" element={<Shelves />} />
        <Route path="/products/spares" element={<Spares />} />

        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/services/distilled-water" element={<Distilled />} />
        <Route path="/services/logistics" element={<Logistics />} />
        <Route path="/services/maintenance" element={<Maintenance />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
