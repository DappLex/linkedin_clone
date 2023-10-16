import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import './Sidebar.css';
import pexels from './assets/pexels.jpeg';

const Sidebar = () => {
    const recentItem = (topic) => {
       return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={pexels} alt="" />
                <RxAvatar className='sidebar__avatar' />
                <h2>Alexander Gospel</h2>
                <h4>AlexanderGospel@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viwed you</p>
                    <p className="sidebar__statnumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>viwes on post</p>
                    <p className="sidebar__statnumber">
                        2,448
                    </p>
                </div>
            </div>
            
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("Proggraming")}
                {recentItem("Softwareenginearing")}
                {recentItem("Design")}
                {recentItem("Developer")}
            </div>
        </div>
    );
};

export default Sidebar;
