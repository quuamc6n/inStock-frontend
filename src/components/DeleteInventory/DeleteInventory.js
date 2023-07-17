import "./DeleteInventory.scss";
import React from "react";
import CloseIcon from "../../assets/images/Icons/close-24px.svg";
import axios from "axios";

const DeleteInventory = ({ isOpen, onClose, inventoryName, inventoryId }) => {
    const handleDelete = () => {
      axios
        .delete(`http://localhost:8080/inventories/${inventoryId}`)
        .then(() => {
          onClose();
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting inventory item:", error);
        });
    };

    return (
        <section className={`inventory-modal ${isOpen ? "inventory-open" : ""}`}>
      <div className="delete-inventory">
        <div className="delete-inventory__box">
          <img
            src={CloseIcon}
            onClick={onClose}
            className="delete-inventory__close"
          />
          <div className="delete-inventory__content">
            <h2 className="delete-inventory__title">
              Delete {inventoryName} Inventory?
            </h2>
            <p className="delete-inventory__text">
              Please confirm that you'd like to delete {inventoryName} from the
              list of warehouses. You won't be able to undo this action.
            </p>
          </div>
        </div>
        <div className="delete-inventory__buttons">
          <button onClick={onClose} className="delete-inventory__cancel">
            Cancel
          </button>
          <button onClick={handleDelete} className="delete-inventory__delete">
            Delete
          </button>
        </div>
      </div>
    </section>

    )
}

export default DeleteInventory