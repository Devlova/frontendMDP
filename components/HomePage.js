function HomePage({ order }) {
    if (!order) {
    return <div>Sorry, we could not find your order!</div>;
    }

    return (
      <div>
        <h1>HomePage</h1>
        <p>This is my a houses y&apos;all!</p>
        {order.item.map(order => <div key={order.id}>{order.id} | {order.first_name}</div>)}
      </div>
    );
}

export default HomePage;