import "./AddInventoryItem.scss";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const AddInventoryItem = () => {

const [itemName, setItemName] = useState("");
const [itemDescription, setItemDescription] = useState("");
const [category, setCategory] = useState("");
const [status, setStatus] = useState("");
const [quantity, setQuantity] = useState(0);
const [warehouses, setWarehouses] = useState("");

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.post(`http://localhost:8080/inventories`);
        setInventory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInventory();
  }, []);

  if (!inventory) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="inventoryDetails__header-container">
        <div className="inventoryDetails__header-div">
          <img
            src={backArrow}
            alt="Back Arrow Icon"
            className="inventoryDetails__header-backArrow"
          ></img>
          <h1 className="inventoryDetails__header-title">
            Add New Inventory Item
          </h1>
        </div>
      </div>

      <form>
        <section>
          <label>
            Item Name
            <input
              placeholder="Item Name"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            ></input>
          </label>
          <label>
            Item Description
            <input
              placeholder="Please enter a brief item description..."
              type="textArea"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            ></input>
          </label>
          <label>
            Category
            <select placeholder="Please select" onChange={(e) => setCategory(e.target.value)}>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </label>
        </section>
        <section>
          <h1>Item Availability</h1>
          <label>
            Status
            <input></input>
          </label>
          <label>
            Quantity
            <input></input>
          </label>
          <label>
            Warehouses
            <input></input>
          </label>
        </section>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </section>
  );
};

export default AddInventoryItem;
