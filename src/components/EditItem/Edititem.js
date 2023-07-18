import React from 'react'
import { Link } from 'react-router-dom';
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { useState } from 'react';
import classNames from "classnames";
import "./edit-item.scss"

function Edititem() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("In Stock");
    const [quantity, setQuantity] = useState("");
    const [warehouse, setWarehouse] = useState("");


  return (
    <section className="edit-inventory">
      <div className="edit-inventory__container">
        <Link to="/inventory">
          <img src={backArrow} className="edit-inventory__arrow" alt="back arrow" />
        </Link>
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <section className="edit-inventory__form-container">
        <h2 className="edit-inventory__subtitle">Item Details</h2>
        <form className="edit-inventory__form">
          <section className="edit-inventory__form-sub-container">
            <label className="edit-inventory__label">
              <span className="edit-inventory__form-title">Item Name</span>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="edit-inventory__form-input"
                type="text"
                name="name"
                value={name}
                placeholder="Item Name"
              />
            </label>

            <label className="edit-inventory__label">
              <span className="edit-inventory__form-title">Description</span>
              <textarea
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className="edit-inventory__form-input edit-inventory__form-input-textArea"
                name="description"
                value={description}
                placeholder="Please enter a brief item description..."
                rows="10"
              />
            </label>

            <label className="edit-inventory__label">
              <span className="edit-inventory__form-title">Category</span>
              <select
                className="edit-inventory__form-input edit-inventory__form-input-category"
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

          <div className="edit-inventory__form-sub-container">
            <section className="edit-inventory__form-container--contact">
              <h2 className="edit-inventory__subtitle--contact">Item Availability</h2>
              <p className="edit-inventory__form-title">Status</p>
              <div className="edit-inventory__status">
                <label className="edit-inventory__label edit-inventory__label-status">
                  <input
                    onChange={(event) => {
                      setStatus("In Stock");
                    }}
                    className="edit-inventory__form-input edit-inventory__form-input-status"
                    type="radio"
                    name="in stock"
                    value={status}
                    checked={status === "In Stock"}
                  />
                  <span className="edit-inventory__form-title-status">In stock</span>
                </label>
                <label className="edit-inventory__label edit-inventory__label-status">
                  <input
                    onChange={(event) => {
                      setStatus("Out of Stock");
                    }}
                    className="edit-inventory__form-input edit-inventory__form-input-status"
                    type="radio"
                    name="out of stock"
                    value={status}
                    checked={status === "Out of Stock"}
                  />
                  <span className="edit-inventory__form-title-status">
                    Out of stock
                  </span>
                </label>
              </div>
            </section>

            <label
              className={classNames("edit-inventory__label", {
                "edit-inventory__label-hidden": status === "Out of Stock",
              })}
            >
              <span className="edit-inventory__form-title">Quantity</span>
              <input
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
                className="edit-inventory__form-input"
                type="text"
                name="quantity"
                value={quantity}
                placeholder="0"
              />
            </label>

            <label className="edit-inventory__label">
              <span className="edit-inventory__form-title">Warehouse Name</span>
              <select
                className="edit-inventory__form-input"
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
            <section className="edit-inventory__button-container">
              <div
                className="edit-inventory__button-cancel-div"
              >
                <button type="button" className="edit-inventory__button-cancel">
                  Cancel
                </button>
              </div>
              <div className="edit-inventory__button-add-div">
                <button className="edit-inventory__button-add" type="submit">
                  + Add Item
                </button>
              </div>
            </section>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Edititem