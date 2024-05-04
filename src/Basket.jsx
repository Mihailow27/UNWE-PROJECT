import React from "react";

const Basket = ({ items, onCheckout }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert(
      `Your order total is $${totalPrice.toFixed(2)} and has been completed.`
    );
    onCheckout();
  };

  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout}>Complete Order</button>
    </div>
  );
};

export default Basket;
