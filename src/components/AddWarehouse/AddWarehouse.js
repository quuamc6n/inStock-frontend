import "./AddWarehouse.scss";
import { useState } from "react";
import axios from "axios";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const AddWarehouse = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [positon, setPositon] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const newWarehouse = async (warehouseData) => {
    return axios.post("http://localhost:8080/warehouses", warehouseData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const warehouseData = {
      warehouse_name: name,
      address: address,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: positon,
      contact_phone: phone,
      contact_email: email,
    };

    try {
      const response = await newWarehouse(warehouseData);
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
    <section className="add-warehouse">
      <div className="add-warehouse__container">
        <Link to="warehouses" className="add-warehouse__link">
          <img
            src={backArrow}
            className="add-warehouse__arrow"
            alt="back arrow"
          />
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
        
      </div>
      
      <section className="add-warehouse__form-container">
      
        <form className="add-warehouse__form" onSubmit={handleSubmit}>
        
          <section className="add-warehouse__form-sub-container">
          <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Warehouse Name</span>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                  console.log(event);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="name"
                value={name}
                placeholder="Warehouse Name"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Street Address</span>
              <input
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="address"
                value={address}
                placeholder="Street Address"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">City</span>
              <input
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="city"
                value={city}
                placeholder="City"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Country</span>
              <input
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="country"
                value={country}
                placeholder="Country"
              />
            </label>
          </section>

          <section className="add-warehouse__form-container--contact">
            <h2 className="add-warehouse__subtitle--contact">
              Contact Details
            </h2>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Contact Name</span>
              <input
                onChange={(event) => {
                  setContactName(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="contactName"
                value={contactName}
                placeholder="Contact Name"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Positon</span>
              <input
                onChange={(event) => {
                  setPositon(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="positon"
                value={positon}
                placeholder="Positon"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Phone Number</span>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="phone"
                value={phone}
                placeholder="Phone Number"
              />
            </label>

            <label className="add-warehouse__label">
              <span className="add-warehouse__form-title">Email</span>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="add-warehouse__form-input"
                type="text"
                name="email"
                value={email}
                placeholder="Email"
              />
            </label>

            <div className="add-warehouse__button-container">
              <Link to="warehouses" className="add-warehouse__link-cancel">
                <button className="add-warehouse__cancel">Cancel</button>
              </Link>
              <button className="add-warehouse__delete" type="submit">
                + Add Warehouse
              </button>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};

export default AddWarehouse;
