import * as React from 'react'
import fetch from "isomorphic-unfetch";

function OrderConfirmation({ order }) {
    if (!order) {
    return <div>Sorry, we could not find your order!</div>;
    }

    return (
      <div>
        <h1>Mi Casa</h1>
        <p>This is my house y&apos;all!</p>
        {order.item.map(order => <div key={order.id}>{order.id} | {order.first_name}</div>)}
      </div>
    );
}

OrderConfirmation.getInitialProps = async ({ query }) => {
  const result = await fetch(`http://localhost:3000/api/listuser`);
  if (result.status === 200) return { order: await result.json() };
  console.log(result);
  return { order: undefined };
};

export default OrderConfirmation