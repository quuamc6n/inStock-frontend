import axios from "axios";
import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

function Inventory() {
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/inventories`).then((inventoryList) => {
      setInventory(inventoryList.data);
    });
  }, []);

  return (
    <div>
      <InventoryList inventories={inventories} />
    </div>
  );
}

export default Inventory;
