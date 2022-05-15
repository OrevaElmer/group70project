import React from 'react'
import "./widget.scss"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';




export default function Widget(prop) {
  //temporay data:
  const amount = 100
  const diff = 20
  return (
    <div className="widget">
        <div className="left">
            <div className="title">{prop.title}</div>
            <div className="counter">{prop.isMoney && "$ "} {amount}</div>
            <div className="link">{prop.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {prop.icon}
        </div>
    </div>
  )
}
