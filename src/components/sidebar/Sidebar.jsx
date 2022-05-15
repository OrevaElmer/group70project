import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <h3 className='logo'> group70 </h3>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/">
              <DashboardIcon className='icon'/>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <Link to="/client">
              <PersonIcon className='icon'/> 
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <StoreIcon className='icon'/>
              <span>Products</span>
            </Link>
          </li>
          <p className="title">Team</p>
          <li>
            <Link to="/team">
              <GroupsIcon className='icon'/>
              <span>Teams</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <LogoutIcon className='icon'/>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
