import axios from "axios";
import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

function Inventory() {
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://d889-108-173-235-62.ngrok-free.app/inventories`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
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
