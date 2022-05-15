import React from 'react'
import "./tables.scss"
import EgalaseIcon from "../image/egalase.jpg"
import Table from "@mui/material/Table";
import TableBody  from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Tables() {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 4",
            img: {EgalaseIcon},
            customer: "Egalase Oreva",
            date: "1 March",
            amount: 244,
            method: "Cast on delivery",
            status: "Approved",
        },
        {
            id: 1143157,
            product: "Playstation 4",
            img: {EgalaseIcon},
            customer: "Michael Doe",
            date: "2 March",
            amount: 900,
            method: "Online payment",
            status: "Pending",
        },
    ]
  return (
    <div className="table">
        <TableContainer component={Paper} className="table">

        <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className='tableCell'>Tracking ID</TableCell>
                    <TableCell className='tableCell'>Product</TableCell>
                    <TableCell className='tableCell'>Customer</TableCell>
                    <TableCell className='tableCell'>Date</TableCell>
                    <TableCell className='tableCell'>Amount</TableCell>
                    <TableCell className='tableCell'>Payment Method</TableCell>
                    <TableCell className='tableCell'>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row)=>(
                    <TableRow key={row.id}>
                        <TableCell className='tableCell'>{row.id}</TableCell>
                        <TableCell className='tableCell'>
                            <div className="cellWrapper">
                                <img className='image' src={EgalaseIcon} alt="myIcon" />
                                {row.product}
                            </div>
                            </TableCell>
                        <TableCell className='tableCell'>{row.customer}</TableCell>
                        <TableCell className='tableCell'>{row.date}</TableCell>
                        <TableCell className='tableCell'>{row.amount}</TableCell>
                        <TableCell className='tableCell'>{row.method}</TableCell>
                        <TableCell className='tableCell'>
                            <span className={`status ${row.status}`}>
                                {row.status}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>   
        </TableContainer>
    </div>
  )
}
 