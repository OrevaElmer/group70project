import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar"
import Widget from '../../components/widget/Widget'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Tables from "../../components/tables/Tables"

export default function Home() {

  const icon1 = <PersonIcon className="icon" style={{backgroundColor:"rgb(209, 95, 118)"}} />
  const icon2 = <ShoppingCartIcon className='icon' style={{backgroundColor:"rgb(109, 156, 109)"}}/>
  const icon3 = <MonetizationOnIcon className='icon' style={{backgroundColor:"rgb(248, 109, 248)"}}/>
  const icon4 = <AccountBalanceWalletIcon className='icon' style={{backgroundColor: "rgb(243, 207, 141)"}}/>

  return (
    <div className="home">

        <Sidebar /> 
      
        <div className="homeContainer">

          <Navbar />
          
          <div className="widgets">
            <Widget
               title = "USERS"
               isMoney = "false"
               link = "See all users"
               icon= {icon1}
            />
            <Widget
               title = "ORDERS"
               isMoney = "false"
               link = "See all orders"
               icon= {icon2}
            />
            <Widget
               title = "EARNINGS"
               isMoney = "true"
               link = "View net earnings"
               icon= {icon3}
            />
            <Widget
               title = "BALANCE"
               isMoney = "true"
               link = "See details"
               icon= {icon4}
            />
          </div>
          
          <div className="charts">
            <Featured />
            <Chart />
          </div>

          <div className="listContainer">
            <div className="listTitle">Lastest Transactions</div>
            <Tables />
          </div>
          
        </div>
    </div>
  )
}
