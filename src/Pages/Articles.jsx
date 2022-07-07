/** @format */
import "../Pages/articles.css";
import Filter from "../Components/Filter";
import Article from "../Components/Article";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Articles() {

  const getTrending = async () => {
    const articleApi = await fetch(``);
    const data = await articleApi.json();
    console.log(data);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <Filter />
      <motion.div layout className="article_div">
        <AnimatePresence>
          <Article id={1} />
          <Article id={2} />
          <Article id={3} />
          <Article id={4} />
          <Article id={5} />
          <Article id={6} />
          <Article id={7} />
          <Article id={8} />
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Articles;
