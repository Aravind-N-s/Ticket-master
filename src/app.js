import React from 'react'
//npm install --save axios
import axios from 'axios'
import TicketTable from './Table'
import TicketForm from './Form'
import SearchForm from './Search'
import ChartsOne from './chart'
import Progress from './progress'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            tickets : [],
            originalTickets: []
        }
        this.handleTicketSubmission = this.handleTicketSubmission.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.statusChange = this.statusChange.bind(this)
        this.handlePriorityClick = this.handlePriorityClick.bind(this)
    }
    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=9770703738af73e5')
        .then(response => {
            this.setState(() => ({
                tickets: response.data,
                originalTickets: response.data
            }))
        })
    }
    handleTicketSubmission(ticket){
        this.setState((prevState) => ({
            tickets: prevState.tickets.concat(ticket),
            originalTickets: prevState.originalTickets.concat(ticket)
        }))
    }
    handleSearch(value){
        this.setState((prevState) => ({
            tickets: prevState.originalTickets.filter(ticket => ticket.ticket_code.includes(value))
        }))
    }
    handlePriorityClick(value){
        if(value === 'all'){
            this.setState((prevState) => ({
                tickets: [].concat(prevState.originalTickets)
            }))
        }else {
            this.setState((prevState) => ({
                tickets: prevState.originalTickets.filter(ticket => ticket.priority === value)
            }))
        }
    }
    statusChange(e){
        // this.setState((prevState) => ({tickets: prevState}))
        console.log(e.target)
    }

    render(){
        return (
            <div>
                <h1>Ticket Master</h1>
                <h2>Listing Tickets - {this.state.tickets.length}</h2>
                <Progress value = {this.state.originalTickets}/>
                <SearchForm handleSearch = {this.handleSearch} handlePriorityClick = {this.handlePriorityClick} />
                <TicketTable tickets={this.state.tickets} statusChange={this.statusChange} />
                <TicketForm handleTicketSubmission = {this.handleTicketSubmission} />
                <ChartsOne value = {this.state.originalTickets}/>
            </div>
        )
    }
}

export default App
