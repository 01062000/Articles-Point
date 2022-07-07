import React from 'react'
import '../Components/filter.css';
import {NavLink} from 'react-router-dom';

function Filter() {
  return (
    <>
        <div className="filter">
            <NavLink to="/articles/trending" className="filter_button">Trending</NavLink>
            <NavLink to="/articles/gym" className="filter_button">Gym</NavLink>
            <NavLink to="/articles/food" className="filter_button">Food</NavLink>
        </div>
    </>
  )
}

export default Filter