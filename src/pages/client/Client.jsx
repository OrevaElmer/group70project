import React from 'react'
import "./client.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Client() {
  return (
    <div className="client">
      <Sidebar />
      <div className="clientContainer">
        <Navbar />
        See out trusted clients below ...
      </div>
    </div>
  )
}
