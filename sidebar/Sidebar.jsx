import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { signOut} from 'firebase/auth';
import { auth } from '../../APIIntegration/firebase';

export default function Sidebar() {
  const navigate = useNavigate()
  async function handleLogout(){
    try {
      await signOut(auth);
      navigate('/group70project');
    }
    catch (error){
      console.log(error)
    }
  } 
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
          <p className="title">Team</p>oper
          <li>
            <Link to="/team">
              <GroupsIcon className='icon'/>
              <span>Teams</span>
            </Link>
          </li>
          <li>
              <div className='linking'>
              <LogoutIcon className='icon' />
              <span onClick={handleLogout}>Logout</span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
