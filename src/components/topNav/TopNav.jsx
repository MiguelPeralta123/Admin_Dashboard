import React from 'react';
import { NotificationsNone, Language, Settings, ChatBubble } from '@mui/icons-material'
import './TopNav.css'

const TopNav = () => {
    return (
        <div className='topnav-container'>
            <div className='topnav-wrapper'>
                <div className='top-left'>
                    <img className='logo' src='/admin-logo.png' alt='Logo' />
                </div>
                <div className='top-right'>
                    <div className='top-icon-container'>
                        <NotificationsNone className='top-icon' />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='top-icon-container'>
                        <Language className='top-icon' />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='top-icon-container'>
                        <Settings className='top-icon' />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='top-icon-container'>
                        <ChatBubble className='top-icon' />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <img className='profile-picture' src='/profile.png' alt='Profile' />
                </div>
            </div>
        </div>
    );
}

export default TopNav;
