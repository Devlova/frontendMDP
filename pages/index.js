import fetch from "isomorphic-unfetch";
import HomePage from '../components/HomePage';

function HomePages({ data }) {
    return (
      <HomePage data={data}/>
    );
}

HomePages.getInitialProps = async (res) => {
  const result = await fetch(`http://localhost:3000/api/listuser`);
  if (result.status === 200) return { data: await result.json() };
  if (result.error && res) {
    res.statusCode = 404;
  }
  return { data: undefined };
};

export default HomePages;