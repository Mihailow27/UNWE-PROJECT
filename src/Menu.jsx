import React, { useState } from "react";
import PropTypes from "prop-types";
import Basket from "./Basket";

const Menu = ({ items }) => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const handleCheckout = () => {
    // Implement functionality to complete the order
    console.log("Order completed:", basket);
    setBasket([]); // Clear the basket after checkout
  };

  return (
    <div className="menu-container">
      <div className="menu">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
                <button onClick={() => handleAddToBasket(menuItem)}>Buy</button>
              </div>
            </article>
          );
        })}
      </div>
      <Basket items={basket} onCheckout={handleCheckout} />
    </div>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Menu;
