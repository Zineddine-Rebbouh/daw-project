import Barchart from './Barchart'
import Piechart from './PieChart'
import React from 'react'

const AnalyticsView = () => {
    return (
        <div className=' mb-4'>
            Analytics  
            <div className=' flex gap-4 flex-col'>

            <Barchart/> 
            <Piechart/>
            </div>
        </div>
    )
}

export default AnalyticsView
