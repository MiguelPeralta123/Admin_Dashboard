import React from 'react';
import { Analytics, Assessment, ChatBubble, Email, Grading, Inventory, LineStyle, ManageAccounts, Paid, Person, Report, Timeline, TrendingUp } from '@mui/icons-material'
import './SideNav.css'
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='sidenav-container'>
            <div className='sidenav-wrapper'>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Dashboard</h3>
                    <ul className='sidenav-menu-list'>
                        <Link className='link' to={'/'}>
                            <li className='sidenav-menu-list-item'>
                                <LineStyle className='sidenav-icon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidenav-menu-list-item'>
                            <Timeline className='sidenav-icon' />
                            Analytics
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <TrendingUp className='sidenav-icon' />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Admin</h3>
                    <ul className='sidenav-menu-list'>
                        <Link className='link' to={'/users'}>
                            <li className='sidenav-menu-list-item'>
                                <Person className='sidenav-icon' />
                                Users
                            </li>
                        </Link>
                        <li className='sidenav-menu-list-item'>
                            <Paid className='sidenav-icon' />
                            Products
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <Assessment className='sidenav-icon' />
                            Report
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <Inventory className='sidenav-icon' />
                            Transaction
                        </li>
                    </ul>
                </div>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Notifications</h3>
                    <ul className='sidenav-menu-list'>
                        <li className='sidenav-menu-list-item'>
                            <Email className='sidenav-icon' />
                            Email
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <ChatBubble className='sidenav-icon' />
                            Messages
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <Grading className='sidenav-icon' />
                            Mange
                        </li>
                    </ul>
                </div>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Stats</h3>
                    <ul className='sidenav-menu-list'>
                        <li className='sidenav-menu-list-item'>
                            <ManageAccounts className='sidenav-icon' />
                            Manage
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <Analytics className='sidenav-icon' />
                            Analytics
                        </li>
                        <li className='sidenav-menu-list-item'>
                            <Report className='sidenav-icon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
