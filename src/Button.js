import React from 'react'
class Button extends React.Component{
    render(){
        let value
        if(this.props.ticket.status == 'open'){
            value = this.props.ticket.ticket_code
        }else {
            value = <button onClick = {this.props.remove}>Remove</button>
        }
        return (
            <div>
               {value}          
            </div>
        )
    }
}
export default Button