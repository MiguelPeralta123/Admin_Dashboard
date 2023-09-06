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
                    <img className='member-image' src='images/members/david.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>David Anderson</span>
                        <span className='member-title'>Full-stack Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/emily.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Emily Johnson</span>
                        <span className='member-title'>Front-end Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/james.jpg' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>James Miller</span>
                        <span className='member-title'>DevOps Engineer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/sarah.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Sarah Davis</span>
                        <span className='member-title'>Data Analyst</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/michael.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Michael Wilson</span>
                        <span className='member-title'>Python Developer</span>
                    </div>
                    <button className='display-button'>
                        <Visibility className='display-icon' />
                        Display
                    </button>
                </li>
                
                <li className='members-list-item'>
                    <img className='member-image' src='images/members/robert.png' alt='User' />
                    <div className='member-info'>
                        <span className='member-username'>Robert Taylor</span>
                        <span className='member-title'>UI/UX Designer</span>
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
