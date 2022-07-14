/** @format */
import "../Pages/articles.css";
import Filter from "../Components/Filter";
import Article from "../Components/Article";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Articles() {
  const param = useParams();

  let [articles, setArticles] = useState([]);
  let [trendingArticles, setTrendingArticles] = useState([]);

  const getTrending = async () => {
    const response = await fetch(`http://localhost:8500/articles`);
    const articleData = await response.json();
    setArticles(articleData);
    console.log(articleData);
    //console.log(param.category);
    trendingArticles = articles.filter((article) => {
      return article.type == param.category;
    });
    if(trendingArticles.length === 0)
      setTrendingArticles(articleData);
    else
      setTrendingArticles(trendingArticles);
    //console.log(trendingArticles);
  };

  useEffect(() => {
    getTrending();
  }, [param.category]);

  return (
    <>
      <Filter />
      <motion.div layout className="article_div">
        <AnimatePresence>
          {trendingArticles.map((article) => {
            return <Article id={article.aid} userName={article.uname} category={article.type} content={article.content}/>;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Articles;
