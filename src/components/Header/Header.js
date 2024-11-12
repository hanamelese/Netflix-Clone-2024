import React from 'react'
import './Header.css';
import { Search, NotificationsNone, AccountBox, ArrowDropDown } from '@mui/icons-material';

const Header = () => {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            
            <li>Home</li>
            <li>Tvshow</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Movies</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className='header-right'>
          <ul><li><Search /></li>
<li><NotificationsNone /></li>
<li><AccountBox /></li>
<li><ArrowDropDown /></li>
          </ul>
        </div>
        </div>

    </div>
  )
}

export default Header
