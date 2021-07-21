import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const widgetData=[
    {
        id: 1,
        title: 'Github CoPilot',
        read : 'AI Powered dev Assistant'
    },
    {
        id: 2,
        title: 'Machine Learning',
        read : 'Building Smart Machines'
    },
    {
        id: 3,
        title: 'Making A successful Career',
        read : 'Winning the Competition'
    },
]


function Widgets() {

    const NewsArticle = ({heading, subtitle}) => {
        return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            
            {widgetData.map((data)=><NewsArticle key={data.id} heading={data.title} subtitle={data.read}/>)}
            
        </div>
    )
}

export default Widgets
