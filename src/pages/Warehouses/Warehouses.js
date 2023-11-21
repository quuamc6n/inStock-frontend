import WarehouseList from "../../components/WarehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  // Need early return or async -> await
  useEffect(() => {
    axios
      .get(`https://e5cd-108-173-235-62.ngrok-free.app/warehouses`)
      .then((warehouseList) => {
        setWarehouses(warehouseList.data);
      });
  }, []);

  return (
    <div>
      <WarehouseList warehouses={warehouses} />
    </div>
  );
};

export default Warehouses;
