import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div class="navBar">
      <Link to="/" class="page" id="logoButton">myJournal</Link>
      <Link to="/productivity" class="page" id="prodButton">productivity</Link>
      <Link to="stress-reduction" class="page" id="stressButton">stress help</Link>
    </div>
  )
}

export default Header
