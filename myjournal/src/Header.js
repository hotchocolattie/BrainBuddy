import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="navBar">
      <Link to="/" className="page" id="logoButton">myJournal</Link>
      <Link to="/productivity" className="page" id="prodButton">productivity</Link>
      <Link to="stress-reduction" className="page" id="stressButton">stress relief</Link>
    </div>
  )
}

export default Header
