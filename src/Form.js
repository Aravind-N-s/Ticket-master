import React from 'react'
import axios from 'axios'
import {FormControl, TextField, Button, Typography} from '@material-ui/core'

class TicketForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            department: '',
            priority: '',
            message: '',
            departmentOptions: [
                {id: '1',name: 'technical'},
                {id: '2',name: 'sales'},
                {id: '3',name: 'hr'},
                {id: '4',name: 'service'}
            ],
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    }
    // 3 ways ofwriting event handlers in react
    // 1 - arrow function
    handleNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({name}))
    }

    // 2 regular mothod - bind in constructor
    handleDepartmentChange(e) {
        const department = e.target.value
        this.setState(() => ({department}))
    }

    // 3 bind when calling function - least popular way - not at all
    handlePriorityChange(e){
        const priority = e.target.value
        this.setState(() => ({priority}))
    }
    handleSubmit (e){
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=9770703738af73e5', formData)
        .then(response => {
            // console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                this.setState(() => ({errors: response.data.errors}))
            } else {
                this.props.handleTicketSubmission(response.data)
                this.resetForm()
            }
        })
    }
    
    handleReset(e){
        e.preventDefault()
        this.resetForm()
    }
    resetForm(){
        this.setState (() => ({
            name: '',
            department: '',
            priority: '',
            message: ''
        }))
    }
    render (){
        return(
            <div style={{maxWeight:'50%'}}>
                <form onSubmit = {this.handleSubmit}>
                    <fieldset>
                        <legend style={{fontWeight: "bold"}}>
                            <h1>Add Ticket</h1>
                        </legend>
                        <FormControl>
                            <TextField
                                label="Name"
                                value = {this.state.name} onChange = {this.handleNameChange}
                                error = {this.state.errors.name}
                                margin = "dense"
                            />
                            <TextField
                                select
                                label = "Department"
                                error =  {this.state.errors.department}
                                value = {this.state.department} onChange = {this.handleDepartmentChange}
                                > 
                                    (option =>
                                    {this.state.departmentOptions.map(dept => {
                                        return <option key={dept.id} value={dept.name}>{dept.name.toUpperCase()}</option>
                                    })}
                                
                            </TextField>
                            <TextField
                                select
                                label="Priority"
                                value = {this.state.priority} onChange = {this.handlePriorityChange.bind(this)}
                                error = {this.state.errors.priority}>
                                option => (
                                    <option value={""}>Select</option>
                                    <option value={"high"}>High</option>
                                    <option value={"medium"}>Medium</option>
                                    <option value={"low"}>Low</option>
                                )
                            </TextField>
                            <TextField
                                id="standard-multiline-static"
                                label = "Message"
                                Multiline rowsMax = "4"
                                value={this.state.message} onChange={(e) => {
                                    //4th way
                                    const message = e.target.value
                                    this.setState(() => ({message}))
                                }}
                                error = {this.state.errors.message && <span>{this.state.errors.message.join(', ')}</span>}
                            />
                            <Button style={{marginTop: '10'}}varient="outlined" color="primary" type="submit">Submit</Button>
                            <Button varient="contained" color="secondary" onClick={this.handleReset}>Reset</Button>
                        </FormControl>    
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TicketForm