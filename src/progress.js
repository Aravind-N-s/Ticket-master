import React from 'react'
import {Chart} from 'react-google-charts'

class Progress extends React.Component{
    render(){
        let closed
        let all
        let value = closed/all
        return(
            <Chart 
                chartType = 'BarChart'
                data ={[
                    ['progress','value'],
                    ['Progress',value]
                ]}
            />
        )
    }
}
export default Progress