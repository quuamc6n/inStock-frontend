import axios from "axios";
import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

function Inventory() {
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://e5cd-108-173-235-62.ngrok-free.app/inventories`)
      .then((inventoryList) => {
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
