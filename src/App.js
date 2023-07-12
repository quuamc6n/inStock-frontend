import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventories from "./pages/Inventories/Inventories";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">

    {/* Will need to discuss how to create routes for specific warehouse inventories
        ie: Washington warehouse inventory would be something along the line of: 
                    warehouses/warehouseId/inventory 
        Need to make sure params does not grab everything after the : and only up to the following / */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="warehouses" element={<Warehouses />}></Route>
          <Route path="warehouses/:warehouseId" element={<Warehouses />}></Route>
          {/* <Route path="warehouses/:warehouseId/inventory" element={<Warehouses />}></Route> */}
          <Route path="inventories" element={<Inventories />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;