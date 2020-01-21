function HomePage({ data }) {
    if (!data) {
    return <div>Sorry, we could not find your data!</div>;
    }

    return (
      <div>
        <h1>HomePage</h1>
        <p>This is my a houses y&apos;all!</p>
        {data.item.map(data => <div key={data.id}>{data.id} | {data.first_name}</div>)}
      </div>
    );
}

export default HomePage;