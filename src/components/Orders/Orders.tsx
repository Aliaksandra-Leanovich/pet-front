import React, { useEffect, useState } from "react";

export const Orders: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const apiUrl = "https://istore-backend-5t3i.onrender.com/api/orders/";

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      credentials: "include",
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {/* <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.description}</li>
        ))}
      </ul> */}
    </div>
  );
};
