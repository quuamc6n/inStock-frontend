import "./SelectedWarehouseInventory.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";
import classNames from "classnames";

const SelectedWarehouseInventory = (props) => {
  const { warehouseId } = useParams();
  const [warehouseInventories, setWarehouseInventory] = useState(null);

  useEffect(() => {
    const fetchWarehouseInventory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}/inventories`
        );
        setWarehouseInventory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouseInventory();
  }, [warehouseId]);

  if (!warehouseInventories) {
    return <div>Loading...</div>;
  }

  return (
    <section className="selected-warehouse">
      {warehouseInventories.map((warehouseInventory) => {
        return (
          <article className="selected-warehouse__card">
            <div className="selected-warehouse__card-info">
              <div className="selected-warehouse__div">
                <p className="selected-warehouse__div-title">INVENTORY ITEM</p>
                <Link
                  key={warehouseInventory.id}
                  to={`/inventory/${warehouseInventory.id}`}
                >
                  <div className="selected-warehouse__div-container">
                    <p className="selected-warehouse__div-link">{`${warehouseInventory.item_name}`}</p>
                    <img
                      className="selected-warehouse__div-link-chevron"
                      src={chevron}
                      alt="right facing chevron"
                    ></img>
                  </div>
                </Link>
              </div>
              <div className="selected-warehouse__div">
                <p className="selected-warehouse__div-title">STATUS</p>
                <div
                  className={classNames(
                    "selected-warehouse__div-info--outstock-container",
                    {
                      "selected-warehouse__div-info--instock-container":
                        warehouseInventory.quantity,
                    }
                  )}
                >
                  {/* {" "} */}
                  <p className="selected-warehouse__div-info selected-warehouse__div-info--outstock">
                    {warehouseInventory.status.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
            <div className="selected-warehouse__card-info">
              <div className="selected-warehouse__div">
                <p className="selected-warehouse__div-title">CATEGORY</p>
                <p className="selected-warehouse__div-info">
                  {warehouseInventory.category}
                </p>
              </div>
              <div className="selected-warehouse__div">
                <p className="selected-warehouse__div-title">QTY</p>
                <p className="selected-warehouse__div-info">
                  {warehouseInventory.quantity}
                </p>
              </div>
            </div>
            <div className="selected-warehouse__buttons">
              <Link>
                <img src={deleteIcon} alt="delete icon" />
              </Link>
              <Link>
                <img src={editIcon} alt="edit icon" />
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SelectedWarehouseInventory;
