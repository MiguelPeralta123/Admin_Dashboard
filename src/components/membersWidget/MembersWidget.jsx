import React from 'react';
import { Visibility } from '@mui/icons-material'
import './MembersWidget.css'

const MembersWidget = () => {
    return (
        <div className='members-container'>
            <h3 className='members-title'>Latest joined users</h3>
            <ul className='members-list'>
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/miguel.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Miguel Peralta</span>
                        <span className='member-title'>React Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/john.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>John Smith</span>
                        <span className='member-title'>Full Stack Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/emma.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Emma Johnson</span>
                        <span className='member-title'>UX/UI Designer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/michael.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Michael Davis</span>
                        <span className='member-title'>Backend Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/olivia.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Olivia Wilson</span>
                        <span className='member-title'>Frontend Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/william.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>William Lee</span>
                        <span className='member-title'>Software Engineer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/james.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>James Anderson</span>
                        <span className='member-title'>DevOps Engineer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default MembersWidget;
