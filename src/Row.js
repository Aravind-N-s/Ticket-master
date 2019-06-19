import React from 'react'
import Button from './Button'
class TicketRow extends React.Component {
    render(props){
        return(
            <tr>
                <td><Button ticket = {this.props.ticket}/></td>
                <td>{this.props.ticket.name}</td>
                <td>{this.props.ticket.department}</td>
                <td>{this.props.ticket.priority}</td>
                <td>{this.props.ticket.message}</td>
                <td><input type='checkbox' onChange = {this.props.statusChange}/></td>
            </tr>
        )
    }
}
export default TicketRow