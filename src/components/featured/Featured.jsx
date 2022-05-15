import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Featured() {
  return (
    <div className="featured">

        <div className="top">
          <h3 className="title">Total Revenue</h3>
          <MoreVertIcon className='icon'/>
        </div>
      
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text="70%" strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
              Previous transactions processing. Last payments may not be included.
            </p>
        </div>
    </div>
  )
}
