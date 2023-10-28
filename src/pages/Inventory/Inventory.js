import axios from "axios";
import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

function Inventory() {
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://instockbackend.onrender.com/inventories`)
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
