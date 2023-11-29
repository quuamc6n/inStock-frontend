import WarehouseList from "../../components/WarehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  // Need early return or async -> await
  useEffect(() => {
    axios
      .get(`https://184f-108-173-235-62.ngrok-free.app/warehouses`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((warehouseList) => {
        setWarehouses(warehouseList.data);
        console.log(warehouseList.data);
      });
  }, []);

  return (
    <div>
      <WarehouseList warehouses={warehouses} />
    </div>
  );
};

export default Warehouses;
