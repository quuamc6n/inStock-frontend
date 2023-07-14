import SelectedWarehouseInventory from "../SelectedWarehouseInventory/SelectedWarehouseInventory";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";

const SelectedWarehouse = () => {
  return (
    <div>
      <WarehouseDetails/>
      <SelectedWarehouseInventory />
    </div>
  );
};

export default SelectedWarehouse;
