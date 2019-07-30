import React from 'react'
import TicketRow from './Row'

import {Table,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core'
const TicketTable = (props) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Code</TableCell>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Name</TableCell>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Department</TableCell>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Priority</TableCell>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Message</TableCell>
                    <TableCell align="left" style={{backgroundColor:"DodgerBlue"}}>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.tickets.map(ticket => {
                    return <TicketRow key={ticket.ticket_code} ticket={ticket} statusChange={props.statusChange}/>
                })}
            </TableBody>
        </Table>
    )
}
export default TicketTable 