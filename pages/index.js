import { server } from "../config";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";

export default function Home({ articles }) {
  //console.log(articles);
  return (
    <div>
      <Meta />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
