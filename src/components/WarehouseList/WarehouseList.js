import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import searchIcon from "../../assets/images/Icons/search-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";


const WarehouseList = (props) => {
  return (
    <main className="main">
      <container className="search__container">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search__bar"
          ></input>
          <img src={searchIcon} className="search__bar-image"></img>
        </div>
      </container>
      <container className="addition__container">
        <Link to={`/warehouses/add`}>
          <div className="addition">
            <div className="addition__button">+ Add New Warehouse</div>
          </div>
        </Link>
      </container>
      {props.warehouses.map((warehouse) => {
        return (
          <section className="main__section">
            <div className="main__card">
              <div className="main__card-info">
                <div className="main__div">
                  <p className="main__div-title">WAREHOUSE</p>
                  <Link key={warehouse.id} to={`/warehouses/${warehouse.id}`}>
                    <span className="main__div-link">{`${warehouse.warehouse_name}`}</span>
                    <img className="main__div-link-chevron" src={chevron}></img>
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
                  <p className="main__div-info">{warehouse.address}</p>
                </div>
                <div className="main__div">
                  <p className="main__div-title">CONTACT INFORMATION</p>
                  <p className="main__div-info">{warehouse.contact_phone}</p>
                  <p className="main__div-info">{warehouse.contact_email}</p>
                </div>
              </div>
              <div className="main__buttons">
                <Link>
                  <img src={deleteIcon}></img>
                </Link>
                <Link>
                  <img src={editIcon}></img>
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default WarehouseList;
