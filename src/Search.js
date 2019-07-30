import React from 'react'
import {InputBase, Button, ButtonGroup} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

class SearchForm extends React.Component {
    constructor (){
        super()
        this.state = {
            search: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e) {
        const search = e.target.value
        this.setState (() => ({
            search
        }))
        this.props.handleSearch(search)
    }
    render(){
        return (
            <div>
                <Icon color = 'secondary'>Search</Icon>
                <InputBase 
                placeholder = "Search By Code" type='text' 
                value={this.state.search} onChange = {this.handleSearchChange}/><br/>
                <ButtonGroup variant="contained" color="primary">
                    <Button onClick={() => {
                        this.props.handlePriorityClick('all')}}>All</Button>
                    <Button onClick={() => {
                        this.props.handlePriorityClick('high')}}>High</Button>
                    <Button onClick={() => {
                        this.props.handlePriorityClick('medium')}}>Medium</Button>
                    <Button onClick={() => {
                        this.props.handlePriorityClick('low')}}>Low</Button>
                </ButtonGroup>
            </div>
        )
    }
}
export default SearchForm