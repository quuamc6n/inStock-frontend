import "./deletewarehouse.scss";
import React from "react";
import CloseIcon from "../../assets/images/Icons/close-24px.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteWarehouse = ({ isOpen, onClose, warehouseName, warehouseId }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(
        `https://184f-108-173-235-62.ngrok-free.app/warehouses/${warehouseId}`,
        {
          headers: { "ngrok-skip-browser-warning": "true" },
        }
      )
      .then(() => {
        alert("Successful");
        onClose();
        navigate("/warehouses");
      })
      .catch((error) => {
        console.error("Error deleting warehouse:", error);
      });
  };

  return (
    <section className={`modal ${isOpen ? "open" : ""}`}>
      <div className="delete-modal">
        <div className="delete-modal__box">
          <img
            src={CloseIcon}
            alt=""
            onClick={onClose}
            className="delete-modal__close"
          />
          <div className="delete-modal__content">
            <h2 className="delete-modal__title">
              Delete {warehouseName} Warehouse?
            </h2>
            <p className="delete-modal__text">
              Please confirm that you'd like to delete {warehouseName} from the
              list of warehouses. You won't be able to undo this action.
            </p>
          </div>
        </div>
        <div className="delete-modal__buttons">
          <button onClick={onClose} className="delete-modal__cancel">
            Cancel
          </button>
          <button onClick={handleDelete} className="delete-modal__delete">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteWarehouse;
