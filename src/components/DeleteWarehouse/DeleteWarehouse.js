import "./deletewarehouse.scss";
import React from "react";
import CloseIcon from "../../assets/images/Icons/close-24px.svg";

const DeleteWarehouse = ({ isOpen, onClose, onDelete, warehouseName }) => {
  return (
    <section className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="delete-modal__container">
          <img src={CloseIcon} onClick={onClose} className="delete-modal__close" />
          <h2>Delete {warehouseName} Warehouse?</h2>
          <p>
            Please confirm that you'd like to delete {warehouseName} from the
            list of warehouses. You won't be able to undo this action.
          </p>
        </div>

        <div className="delete-modal__buttons">
          <button onClick={onClose} className="delete-modal__cancel">Cancel</button>
          <button onClick={onDelete} className="delete-modal__delete">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default DeleteWarehouse;
