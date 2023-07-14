import "./InventoryList.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import searchIcon from "../../assets/images/Icons/search-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";

const InventoryList = (props) => {
  return (
    <main className="inventory">
      <section className="inventory__search">
        <h1 className="inventory__title">Inventory</h1>
        <section className="search__container">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="search__bar"
            ></input>
            <img
              src={searchIcon}
              className="search__bar-image"
              alt="search bar icon"
            />
          </div>
        </section>
        <container className="addition__container">
          <Link>
            <div className="addition">
              <div className="addition__button">+ Add New Item</div>
            </div>
          </Link>
        </container>
      </section>
      {props.inventories.map((inventory) => {
        return (
          <section className="inventory__section">
            <div className="inventory__card">
              <div className="inventory__card-info">
                <div className="inventory__div">
                  <p className="inventory__div-title">INVENTORY ITEM</p>
                  <Link key={inventory.id} to={`/inventory/${inventory.id}`}>
                    <span className="inventory__div-link">{`${inventory.item_name}`}</span>
                    <img
                      className="inventory__div-link-chevron"
                      src={chevron}
                      alt="right facing chevron"
                    ></img>
                  </Link>
                </div>
                <div className="inventory__div">
                  <p className="inventory__div-title">STATUS</p>
                  <p className="inventory__div-info">{inventory.status}</p>
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
              <div className="inventory__div">
                <p className="inventory__div-title">WAREHOUSE</p>
                <p className="inventory__div-info">{inventory.warehouse_name}</p>
              </div>
              <div className="inventory__buttons">
                <Link>
                  <img src={deleteIcon} alt="delete icon" />
                </Link>
                <Link>
                  <img src={editIcon} alt="edit icon" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default InventoryList;
