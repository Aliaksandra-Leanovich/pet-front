import React, { useEffect, useState } from "react";

export const Orders: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const apiUrl = "https://istore-backend-5t3i.onrender.com/api/orders/";

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        Cookie:
          "connect.sid=s%3AUWOHaH3JiMQ3l14Cc8ER3mVbx7af_Q0-.xRDD3%2F9j%2FdBQrgkycI%2Bvi%2BxFBQ6e0wqHJ328G1rb3Dg; Path=/; HttpOnly",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
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
