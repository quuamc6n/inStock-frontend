import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./warehousedetails.scss";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import whiteEditIcon from "../../assets/images/Icons/white-edit-24px.svg";

function WarehouseDetails() {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(
          `https://184f-108-173-235-62.ngrok-free.app/warehouses/${warehouseId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        setWarehouse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouse();
  }, [warehouseId]);

  if (!warehouse) {
    return (
      <div>Loading... Please be patient, I use a free hosting service!</div>
    );
  }

  return (
    <section>
      <div className="warehouse-header">
        <div className="warehouse-header__box">
          <Link to={`/warehouses`} className="warehouse-header__icon">
            <img src={backArrow} alt="BackArrowimage" />
          </Link>
          <h1 className="warehouse-header__name">{warehouse.warehouse_name}</h1>
        </div>
        <Link to={`/warehouses/${warehouseId}/edit`}>
          <button className="warehouse-header__edit-button">
              <img
                src={whiteEditIcon}
                className="warehouse-header__edit-button__icon"
                alt="Edit button"
              />
            <p className="warehouse-header__edit-button__text">Edit</p>
          </button>
        </Link>
      </div>
      <article className="warehouse-info">
        <div className="warehouse-info__address-container">
          <h3 className="table-header">WAREHOUSE ADDRESS:</h3>
          <p className="data-text">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="warehouse-info__contact-container">
          <div className="warehouse-info__contact-container__name">
            <h3 className="table-header">CONTACT NAME:</h3>
            <p className="data-text">{warehouse.contact_name}</p>
            <p className="data-text">{warehouse.contact_position}</p>
          </div>
          <div className="warehouse-info__contact-container__info">
            <h3 className="table-header">CONTACT INFORMATION:</h3>
            <p className="data-text">{warehouse.contact_phone}</p>
            <p className="data-text">{warehouse.contact_email}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WarehouseDetails;
