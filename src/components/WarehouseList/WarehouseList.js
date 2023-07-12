import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/Icons/edit-24px.svg";
import deleteIcon from "../../assets/images/Icons/delete_outline-24px.svg";
import searchIcon from "../../assets/images/Icons/search-24px.svg";
import chevron from "../../assets/images/Icons/chevron_right-24px.svg";

/* tables will have the following names for us to use to access data:
id
warehouse_name
address
city
country
contact_name
contact_position
contact_email
contact_phone
created_at
updated_at
*/

const warehouses = [
  {
    id: 0,
    warehouse: "Manhattan",
    address: "506 Broadway, New York, USA",
    contactName: "Parmin Aujla",
    phone: "+1 (629) 555-0129",
    email: "paujla@instock.com",
  },
  {
    id: 1,
    warehouse: "Washington",
    address: "33 Pearl Street SW, Washington, USA",
    contactName: "Graeme Lyon",
    phone: "+1 (647) 504-0911",
    email: "glyon@instock.com",
  },
  {
    id: 2,
    warehouse: "Jersey",
    address: "300 Main Street, New Jersey, USA",
    contactName: "Brad MacDonald",
    phone: "+1 (401) 377-2337",
    email: "bmcdonald@instock.com",
  },
  {
    id: 3,
    warehouse: "San Fran",
    address: "890 Brannan Street, San Francisco, USA",
    contactName: "Gary Wong",
    phone: "+1 (239) 555-0108",
    email: "gwong@instock.com",
  },
  {
    id: 4,
    warehouse: "Santa Monica",
    address: "520 Boradway, Santa Monica, USA",
    contactName: "Sharon Ng",
    phone: "+1 (270) 555-0117",
    email: "sng@instock.com",
  },
];

const WarehouseList = () => {
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
      {/* Will need to add search bar and + Add New Warehouse button 
          This will be components if I am not mistaken*/}
      {warehouses.map((warehouse) => {
        return (
          <section className="main__section">
            <div className="main__card">
              <div className="main__card-info">
                <div className="main__div">
                  <p className="main__div-title">WAREHOUSE</p>
                  <Link key={warehouse.id} to={`/warehouses/${warehouse.id}`}>
                    <span className="main__div-link">{`${warehouse.warehouse}`}</span>
                    <img className="main__div-link-chevron" src={chevron}></img>
                  </Link>
                </div>
                <div className="main__div">
                  <p className="main__div-title">CONTACT NAME</p>
                  <p className="main__div-info">{warehouse.contactName}</p>
                </div>
              </div>
              <div className="main__card-info">
                <div className="main__div">
                  <p className="main__div-title">ADDRESS</p>
                  <p className="main__div-info">{warehouse.address}</p>
                </div>
                <div className="main__div">
                  <p className="main__div-title">CONTACT INFORMATION</p>
                  <p className="main__div-info">{warehouse.phone}</p>
                  <p className="main__div-info">{warehouse.email}</p>
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
