import "./AddItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const newItem = async (itemData) => {
    return axios.post("http://localhost:8080/inventories", itemData);
  };

    const handleCancel = () => {
    window.location.href = "/inventory";
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    window.location.href = "/inventory";

    const itemData = {
      item_name: name,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
      warehouse_id: warehouse,
    };

    try {
        console.log(itemData)
      const response = await newItem(itemData);
      if (response.status === 200) {
        alert("successful");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="add-item">
      <div className="add-item__container">
        <Link to="/inventory">
          <img src={backArrow} className="add-item__arrow" alt="back arrow" />
        </Link>
        <h1 className="add-item__title">Add New Inventory Item</h1>
      </div>
      <section className="add-item__form-container">
        <h2 className="add-item__subtitle">Item Details</h2>
        <form className="add-item__form" onSubmit={handleSubmit}>
          <section className="add-item__form-sub-container">
            <label className="add-item__label">
              <span className="add-item__form-title">Item Name</span>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="add-item__form-input"
                type="text"
                name="name"
                value={name}
                placeholder="Item Name"
              />
            </label>

            <label className="add-item__label">
              <span className="add-item__form-title">Description</span>
              <input
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className="add-item__form-input add-item__form-input-textArea"
                type="textArea"
                name="description"
                value={description}
                placeholder="Please enter a brief item description..."
              />
            </label>

            <label className="add-item__label">
              <span className="add-item__form-title">Category</span>
              <select
                className="add-item__form-input add-item__form-input-category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option value="" selected>
                  Please select
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
              </select>
            </label>
          </section>

          <div className="add-item__form-sub-container">
            <section className="add-item__form-container--contact">
              <h2 className="add-item__subtitle--contact">Item Availability</h2>
              <span className="add-item__form-title">Status</span>
              <div className="add-item__status">
                <label className="add-item__label add-item__label-status">
                  <input
                    onChange={(event) => {
                      setStatus("In Stock");
                    }}
                    className="add-item__form-input add-item__form-input-status"
                    type="radio"
                    name="in stock"
                    value={status}
                    checked={status === "In Stock"}
                  />
                  <span className="add-item__form-title-status">In stock</span>
                </label>
                <label className="add-item__label add-item__label-status">
                  <input
                    onChange={(event) => {
                      setStatus("Out of Stock");
                    }}
                    className="add-item__form-input add-item__form-input-status"
                    type="radio"
                    name="out of stock"
                    value={status}
                    checked={status === "Out of Stock"}
                  />
                  <span className="add-item__form-title-status">
                    Out of stock
                  </span>
                </label>
              </div>
            </section>

            <label
              className={classNames("add-item__label", {
                "add-item__label-hidden": status === "Out of Stock",
              })}
            >
              <span className="add-item__form-title">Quantity</span>
              <input
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
                className="add-item__form-input"
                type="text"
                name="quantity"
                value={quantity}
                placeholder="0"
              />
            </label>

            <label className="add-item__label">
              <span className="add-item__form-title">Warehouse Name</span>
              <select
                className="add-item__form-input"
                value={warehouse}
                onChange={(event) => {
                  setWarehouse(event.target.value);
                }}
              >
                <option value="" seleceted>
                  Please select
                </option>
                <option value="1">Manhattan</option>
                <option value="2">Washington</option>
                <option value="3">Jersey</option>
                <option value="4">SF</option>
                <option value="5">Santa Monica</option>
                <option value="6">Seattle</option>
                <option value="7">Miami</option>
                <option value="8">Boston</option>
              </select>
            </label>
            <section className="add-item__button-container">
              <button
                onClick={() => {
                  handleCancel();
                }}
                type="button"
                className="add-item__button-cancel"
              >
                Cancel
              </button>
              <button className="add-item__button-add" type="submit">
                + Add Item
              </button>
            </section>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddItem;
