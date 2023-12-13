import "./EditWarehouse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditWarehouse = () => {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`https://184f-108-173-235-62.ngrok-free.app/warehouses/${warehouseId}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((warehouse) => {
        setWarehouse(warehouse.data);
      });
  }, [warehouseId]);

  useEffect(() => {
    if (warehouse) {
      setName(warehouse.warehouse_name);
      setAddress(warehouse.address);
      setCity(warehouse.city);
      setCountry(warehouse.country);
      setContactName(warehouse.contact_name);
      setPosition(warehouse.contact_position);
      setPhone(warehouse.contact_phone);
      setEmail(warehouse.contact_email);
    }
  }, [warehouse]);

  const editWarehouse = async (warehouseData) => {
    return axios.put(
      `https://184f-108-173-235-62.ngrok-free.app/warehouses/${warehouseId}`,
      warehouseData,
      {
        headers: { "ngrok-skip-browser-warning": "true" },
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const warehouseData = {
      warehouse_name: name,
      address: address,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phone,
      contact_email: email,
    };

    try {
      const response = await editWarehouse(warehouseData);
      if (response.status === 200) {
        alert("successful");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    window.location.href = `/warehouses`;
  };

  return (
    <section className="edit-warehouse">
      <div className="edit-warehouse__container">
        <Link
          to={`/warehouses/${warehouseId}`}
          className="edit-warehouse__backArrow-link"
        >
          <img
            src={backArrow}
            className="edit-warehouse__arrow"
            alt="back arrow"
          />
        </Link>
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <section className="edit-warehouse__form-container">
        <h2 className="edit-warehouse__subtitle">Warehouse Details</h2>
        <form className="edit-warehouse__form" onSubmit={handleSubmit}>
          <section className="edit-warehouse__form-sub-container">
            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Warehouse Name</span>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="name"
                value={name}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Street Address</span>
              <input
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="address"
                value={address}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">City</span>
              <input
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="city"
                value={city}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Country</span>
              <input
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="country"
                value={country}
              />
            </label>
          </section>

          <section className="edit-warehouse__form-container--contact">
            <h2 className="edit-warehouse__subtitle--contact">
              Contact Details
            </h2>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Contact Name</span>
              <input
                onChange={(event) => {
                  setContactName(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="contactName"
                value={contactName}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Positon</span>
              <input
                onChange={(event) => {
                  setPosition(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="positon"
                value={position}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Phone Number</span>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="phone"
                value={phone}
              />
            </label>

            <label className="edit-warehouse__label">
              <span className="edit-warehouse__form-title">Email</span>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="edit-warehouse__form-input"
                type="text"
                name="email"
                value={email}
              />
            </label>

            <div className="edit-warehouse__button-container">
              <button
                onClick={() => {
                  handleCancel();
                }}
                className="edit-warehouse__button-cancel"
              >
                Cancel
              </button>

              <button className="edit-warehouse__button-submit" type="submit">
                + Edit Warehouse
              </button>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};

export default EditWarehouse;
