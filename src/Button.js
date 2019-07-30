import React from 'react'
import {Button} from '@material-ui/core'
class Buttons extends React.Component{
    render(){
        let value
        if(this.props.ticket.status == 'open'){
            value = this.props.ticket.ticket_code
        }else {
            value = <Button onClick = {this.props.remove}>Remove</Button>
        }
        return (
            <div>
               {value}          
            </div>
        )
    }
}
export default Buttons