import './App.css';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Articles from './Pages/Articles';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ArticleDetails from './Pages/ArticleDetails';
import Register from './Pages/Register';
import styled from 'styled-components';
import WriteArticle from './Pages/WriteArticle';
import {Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:category" element={<Articles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile/:role/:id" element={<Profile />} />
        <Route path="/article/:category/:id" element={<ArticleDetails />} />
        <Route path="/article/publish" element={<WriteArticle />} />
      </Routes>
    </Router>
    </AnimatePresence>
  );
}

export default App;
