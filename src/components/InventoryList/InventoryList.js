import "./InventoryList.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";
import classNames from "classnames";


const InventoryList = (props) => {
  return (
    <main className="inventory">
      <section className="inventory__container">
        <h1 className="inventory__title">Inventory</h1>
        <section className="inventory__search-container">
          <div className="inventory__search">
            <input
              type="text"
              placeholder="Search..."
              className="inventory__search-bar"
            ></input>
          </div>
        </section>
        <div className="inventory__button-container">
          <Link to="/inventory/add" className="inventory__link">
            <div className="inventory__button-sub-container">
              <p className="inventory__button">+ Add New Item</p>
            </div>
          </Link>
        </div>
      </section>
      {props.inventories.map((inventory) => {
        return (
          <article className="inventory__card">
            <div className="inventory__card-info">
              <div className="inventory__div">
                <p className="inventory__div-title">INVENTORY ITEM</p>
                <Link className="inventory__link" key={inventory.id} to={`/inventory/${inventory.id}`}>
                  <div className="inventory__div-container">
                    <p className="inventory__div-link">{`${inventory.item_name}`}</p>
                    <img
                      className="inventory__div-link-chevron"
                      src={chevron}
                      alt="right facing chevron"
                    ></img>
                  </div>
                </Link>
              </div>
              <div className="inventory__div">
                <p className="inventory__div-title">STATUS</p>
                <div
                  className={classNames(
                    "inventory__div-info inventory__div-info--outstock-container",
                    {
                      "inventory__div-info--instock-container":
                        inventory.quantity,
                    }
                  )}
                >
                 
                  <p className="inventory__div-info--outstock">
                    {inventory.status.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
            <div className="inventory__card-info">
              <div className="inventory__div">
                <p className="inventory__div-title">CATEGORY</p>
                <p className="inventory__div-info">{inventory.category}</p>
              </div>
              <div className="inventory__div">
                <p className="inventory__div-title">QTY</p>
                <p className="inventory__div-info">{inventory.quantity}</p>
              </div>
            </div>
            <div className="inventory__card-info">
              <div className="inventory__div inventory__div--ghost">
                <p className="inventory__div-title"></p>
                <p className="inventory__div-info"></p>
              </div>
              <div className="inventory__div">
                <p className="inventory__div-title">WAREHOUSE</p>
                <p className="inventory__div-info">
                  {inventory.warehouse_name}
                </p>
              </div>
            </div>

            <div className="inventory__buttons">
              <Link className="inventory__link">
                <img src={deleteIcon} alt="delete icon" />
              </Link>
              <Link className="inventory__link">
                <img src={editIcon} alt="edit icon" />
              </Link>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default InventoryList;
