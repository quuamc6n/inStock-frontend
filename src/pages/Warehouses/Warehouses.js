import WarehouseList from "../../components/WarehouseList/WarehouseList"
import axios from "axios";
import { useState, useEffect } from "react";

const Warehouses = () => {

  const [warehouses, setWarehouses] = useState([]);
  // Need early return or async -> await
  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses`).then((warehouseList) => {
      setWarehouses(warehouseList.data);
    });
  });

  return (
    <div>
        <WarehouseList warehouses={warehouses} />
    </div>
  )
}

export default Warehouses