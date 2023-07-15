import "./SelectedWarehouseInventory.scss"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SelectedWarehouseInventory = (props) => {
  const { warehouseId } = useParams();
  const [warehouseInventory, setWarehouseInventory] = useState(null);
 
  useEffect(() => {
    const fetchWarehouseInventory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}/inventories`
        );
        setWarehouseInventory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouseInventory();
  }, [warehouseId]);

  if (!warehouseInventory) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      

      
    </section>
  )
}

export default SelectedWarehouseInventory