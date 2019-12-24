import fetch from "isomorphic-unfetch";
import HomePage from '../components/HomePage';

function HomePages({ order }) {
    return (
      <HomePage order={order}/>
    );
}

HomePages.getInitialProps = async (res) => {
  const result = await fetch(`http://localhost:3000/api/listuser`);
  if (result.status === 200) return { order: await result.json() };
  if (result.error && res) {
    res.statusCode = 404;
  }
  return { order: undefined };
};

export default HomePages;