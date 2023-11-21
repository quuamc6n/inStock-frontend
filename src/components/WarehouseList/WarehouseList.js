import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";
import React, { useState } from "react";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";

const WarehouseList = (props) => {
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);

  const openDeleteModal = (warehouseName, warehouseId) => {
    setSelectedWarehouse(warehouseName);
    setSelectedWarehouseId(warehouseId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedWarehouse(null);
    setSelectedWarehouseId(null);
    setDeleteModalOpen(false);
  };
  console.log("here")
  console.log(props)

  return (
    <main className="main">
      <section className="search__container">
        <h1 className="main__header">Warehouses</h1>
        <article className="search__sub-container">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="search__bar"
            ></input>
          </div>
        </article>
        <article className="addition__container">
          <Link to={`/warehouses/add`}>
            <div className="addition">
              <div className="addition__button">+ Add New Warehouse</div>
            </div>
          </Link>
        </article>
      </section>
      {props.warehouses.map((warehouse) => {
        return (
          <section className="main__section">
            <div className="main__card">
              <div className="main__card-info">
                <div className="main__div">
                  <p className="main__div-title">WAREHOUSE</p>
                  <Link key={warehouse.id} to={`/warehouses/${warehouse.id}`}>
                    <div className="main__div-container">
                      <p className="main__div-link">{`${warehouse.warehouse_name}`}</p>
                      <img
                        className="main__div-link-chevron"
                        src={chevron}
                        alt="Chevron Right"
                      ></img>
                    </div>
                  </Link>
                </div>
                <div className="main__div">
                  <p className="main__div-title">CONTACT NAME</p>
                  <p className="main__div-info">{warehouse.contact_name}</p>
                </div>
              </div>
              <div className="main__card-info">
                <div className="main__div">
                  <p className="main__div-title">ADDRESS</p>
                  <p className="main__div-info">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                </div>
                <div className="main__div">
                  <p className="main__div-title">CONTACT INFORMATION</p>
                  <p className="main__div-info">{warehouse.contact_phone}</p>
                  <p className="main__div-info">{warehouse.contact_email}</p>
                </div>
              </div>
              <div className="main__buttons">
                <button onClick={() => openDeleteModal(warehouse.warehouse_name, warehouse.id)} className="main__buttons--delete">
                  <img src={deleteIcon} alt="Delete Icon"></img>
                </button>
                <Link to={`./${warehouse.id}/edit`}>
                  <img src={editIcon} alt="Edit Icon"></img>
                </Link>
              </div>
            </div>
            <div className="modal-container">
              <DeleteWarehouse
                isOpen={DeleteModalOpen}
                onClose={closeDeleteModal}
                warehouseName={selectedWarehouse}
                warehouseId={selectedWarehouseId}
              />
            </div>{" "}
          </section>
        );
      })}
    </main>
  );
};

export default WarehouseList;
