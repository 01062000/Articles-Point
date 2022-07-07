import React from 'react'
import styled from 'styled-components';
import './home.css';
import { NavLink } from 'react-router-dom';

const ImageDiv = styled.div`
`

function Home() {
  return (
    <>
      <div className='cover_div'>
        <h1>World's no 1 article point side</h1>
        <NavLink to="/articles/Trending" className="article_button">Get Started</NavLink>
      </div>
    </>
  )
}

export default Home

