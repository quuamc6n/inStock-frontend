import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import SelectedWarehouse from "./components/SelectedWarehouse/SelectedWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import AddItem from "./components/AddItem/AddItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-section">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="warehouses" element={<Warehouses />}></Route>
            <Route path="warehouses/add" element={<AddWarehouse />}></Route>
            <Route
              path="warehouses/:warehouseId"
              element={<SelectedWarehouse />}
            ></Route>
            <Route
              path="warehouses/:warehouseId/delete"
              element={<Warehouses />}
            ></Route>
            <Route
              path="warehouses/:warehouseId/edit"
              element={<Warehouses />}
            ></Route>
            <Route
              path="warehouses/:warehouseId/:inventoryId"
              element={<Warehouses />}
            ></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route
              path="inventory/:inventoryId"
              element={<InventoryItemDetails />}
            ></Route>
            <Route path="/inventory/add"
            element={<AddItem />}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
