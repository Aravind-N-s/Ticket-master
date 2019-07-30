import React from'react'
import { Chart } from 'react-google-charts' 
import {Grid} from '@material-ui/core'

class ChartsOne extends React.Component { 
    render(props){
        let high = 0, medium = 0, low = 0
        {this.props.value.map(function(ticket){
            if(ticket.status == 'open'){
                if(ticket.priority == 'high'){
                    high++
                }else if(ticket.priority == 'medium'){
                    medium++
                }else if(ticket.priority == 'low'){
                    low++
                }
            }
        })}
        return(
            <Grid container>
                <Grid item sm={6}>
                    <Chart
                        chartType = 'PieChart'
                        loader={<div>Priority Pie Chart</div>}
                        data={[
                            ['Priority', 'Value'],
                            ['High', high],
                            ['Medium', medium],
                            ['Low', low]
                        ]}
                    />
                </Grid>
                <Grid item sm={6}>
                    <Chart
                        chartType = 'Bar'
                        loader={<div>Priority Bar Chart</div>}
                        data = {[
                            ['Priority', 'Value'],
                            ['High', high],
                            ['Medium', medium],
                            ['Low', low]
                        ]} 
                    />
                </Grid> 
            </Grid>      
        )
    }
}
export default ChartsOne