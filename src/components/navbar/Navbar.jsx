import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageIcon from '@mui/icons-material/Language';
import EgalaseIcon from "../image/egalase.jpg"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            <select>
              <option>English</option>
              <option>French</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="item">
            <img src={EgalaseIcon} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}
