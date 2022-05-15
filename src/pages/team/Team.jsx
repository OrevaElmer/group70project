import React from 'react'
import "./team.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Team() {
  return (
    <div className="team">
    <Sidebar />
    <div className="teamContainer">
      <Navbar />
      A table of our group members goes here ....
    </div>
  </div>
  )
}
