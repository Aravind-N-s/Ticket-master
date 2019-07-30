import React from 'react'
import axios from 'axios'
import {FormControl} from '@material-ui/core'

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
            <div>
                <FormControl>
                    <form onSubmit = {this.handleSubmit} Validate autoComplete="off">
                        <fieldset>
                            <legend>Add Ticket</legend>
                            <label>
                                Name 
                                <input type = "text" value = {this.state.name} onChange = {this.handleNameChange} />
                                {this.state.errors.name && <span>{this.state.errors.name.join(', ')}</span>}
                            </label> <br/>
                            <label>
                                Department
                                <select value = {this.state.department} onChange = {this.handleDepartmentChange}>
                                    <option value ="">Select</option>
                                    {this.state.departmentOptions.map(dept => {
                                        return <option key={dept.id} value={dept.name}>{dept.name.toUpperCase()}</option>
                                    })}
                                </select>
                                {this.state.errors.department && <span>{this.state.errors.department.join(', ')}</span>}
                            </label> <br/>
                            <label>
                                Priority
                                <select value = {this.state.priority} onChange = {this.handlePriorityChange.bind(this)}>
                                    <option value ="">Select</option>
                                    <option value ="high">High</option>
                                    <option value ="medium">Medium</option>
                                    <option value ="low">Low</option>
                                </select>
                                {this.state.errors.priority && <span>{this.state.errors.priority.join(', ')}</span>}
                            </label> <br/>
                            <label>
                                Message 
                                <textarea value={this.state.message} onChange={(e) => {
                                    //4th way
                                    const message = e.target.value
                                    this.setState(() => ({message}))
                                }}></textarea>
                                {this.state.errors.message && <span>{this.state.errors.message.join(', ')}</span>}
                            </label> <br/>
                            <input type="submit" /> 
                            <button onClick={this.handleReset}>reset</button>
                        </fieldset>
                    </form>
                </FormControl>
            </div>
        )
    }
}

export default TicketForm