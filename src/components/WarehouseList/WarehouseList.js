import "./WarehouseList.scss";
import { Link } from "react-router-dom";

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
    warehouse: "Manhattan",
    address: "506 Broadway, New York, USA",
    contactName: "Parmin Aujla",
    phone: "+1 (629) 555-0129",
    email: "paujla@instock.com",
  },
  {
    id: 2,
    warehouse: "Manhattan",
    address: "506 Broadway, New York, USA",
    contactName: "Parmin Aujla",
    phone: "+1 (629) 555-0129",
    email: "paujla@instock.com",
  },
  {
    id: 3,
    warehouse: "Manhattan",
    address: "506 Broadway, New York, USA",
    contactName: "Parmin Aujla",
    phone: "+1 (629) 555-0129",
    email: "paujla@instock.com",
  },
];

const WarehouseList = () => {
  return (
    <main className="main">
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
                    <p className="main__div-link">{`${warehouse.warehouse} >`}</p>
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
                  <button>trashcan</button>
                  <button>edit</button>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default WarehouseList;
