import React from 'react'
import Button from './Button'
import {TableRow,TableCell,Radio} from '@material-ui/core'
class TicketRow extends React.Component {
    render(props){
        return(
            <TableRow hover>
                <TableCell style={{textTransform: 'uppercase',textWeight:'bold'}} align="left"><Button ticket = {this.props.ticket}/></TableCell>
                <TableCell style={{textTransform: 'uppercase',textWeight:'bold'}} align="left">{this.props.ticket.name}</TableCell>
                <TableCell style={{textTransform: 'uppercase'}} align="left">{this.props.ticket.department}</TableCell>
                <TableCell style={{textTransform: 'uppercase',textWeight:'bold'}} align="left">{this.props.ticket.priority}</TableCell>
                <TableCell style={{textTransform: 'capitalize'}} align="left">{this.props.ticket.message}</TableCell>
                <TableCell><Radio
                    color="secondary"
                    onChange = {this.props.statusChange}/>
                </TableCell>
            </TableRow>
        )
    }
}
export default TicketRow