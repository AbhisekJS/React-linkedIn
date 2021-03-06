import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
function Sidebar() {

    const user = useSelector(selectUser)

    const RecentItem = ({topic})=>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar className='sidebar__avatar'>{user.displayName[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">
                        2,554
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar__statNumber">
                        2,211
                    </p>
                </div>
               
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {/* {recentItem('reactJs')}     
                {recentItem('programming')}     
                {recentItem('javascript')}     
                {recentItem('webdevelopment')}     
                {recentItem('software')}     
                {recentItem('ui/ux')}      */}
                {['reactjs','programming','webdevelopment','interviews','ui/ux']
                .map((item,index) =>
                <RecentItem key={index} topic={item}/>)}
            </div>
        </div>
    )
}

export default Sidebar
