import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import whiteEditIcon from "../../assets/images/Icons/white-edit-24px.svg";
import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./InventoryItemDetails.scss";

const InventoryItemDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          `https://184f-108-173-235-62.ngrok-free.app/inventories/${inventoryId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        setInventory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInventory();
  }, [inventoryId]);

  if (!inventory) {
    return <div>Loading...</div>;
  }

  const inv = inventory[0];

  return (
    <section className="inventoryDetails">
      <header className="inventoryDetails__header">
        <div className="inventoryDetails__header-container">
          <div className="inventoryDetails__header-div">
            <Link
              to={`/inventory`}
              className="inventoryDetails__header-div-link"
            >
              <img
                src={backArrow}
                alt="Back Arrow Icon"
                className="inventoryDetails__header-backArrow"
              ></img>
            </Link>
            <h1 className="inventoryDetails__header-title">{inv.item_name}</h1>
          </div>
          <div className="inventoryDetails__header-edit-container">
            <Link to={`./edit`}>
              <button className="inventoryDetails__header-edit-button">
                <img
                  className="inventoryDetails__header-edit"
                  src={whiteEditIcon}
                  alt="White Edit Icon"
                ></img>
              </button>
            </Link>
          </div>
        </div>
        <div className="inventoryDetails__container">
          <article className="inventoryDetails__container-article">
            <p className="inventoryDetails__container-title">
              ITEM DESCRIPTION:
            </p>
            <p className="inventoryDetails__container-desc">
              {inv.description}
            </p>
          </article>
          <article className="inventoryDetails__container-article">
            <p className="inventoryDetails__container-title">CATEGORY:</p>
            <p className="inventoryDetails__container-desc">{inv.category}</p>
          </article>
          <article className="inventoryDetails__container-article-status">
            <div className="inventoryDetails__container-article-status-div">
              <div className="inventoryDetails__container-article-div">
                <p className="inventoryDetails__container-title">STATUS:</p>
                <p
                  className={classNames(
                    "inventoryDetails__container-outstock",
                    {
                      "inventoryDetails__container-instock": inv.quantity,
                    }
                  )}
                >
                  {inv.status.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="inventoryDetails__container-article-status-div">
              <div className="inventoryDetails__container-article-div">
                <p className="inventoryDetails__container-title">QUANTITY:</p>
                <p className="inventoryDetails__container-desc">
                  {inv.quantity}
                </p>
              </div>
            </div>
          </article>
          <article className="inventoryDetails__container-article">
            <p className="inventoryDetails__container-title">WAREHOUSE:</p>
            <p className="inventoryDetails__container-desc">
              {inv.warehouse_name}
            </p>
          </article>
        </div>
      </header>
    </section>
  );
};

export default InventoryItemDetails;
