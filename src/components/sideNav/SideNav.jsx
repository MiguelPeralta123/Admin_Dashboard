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
                        <Link className='link' to={'/analytics'}>
                            <li className='sidenav-menu-list-item'>
                                <Timeline className='sidenav-icon' />
                                Analytics
                            </li>
                        </Link>
                        <Link className='link' to={'/sales'}>
                            <li className='sidenav-menu-list-item'>
                                <TrendingUp className='sidenav-icon' />
                                Sales
                            </li>
                        </Link>
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
                        <Link className='link' to={'/products'}>
                            <li className='sidenav-menu-list-item'>
                                <Paid className='sidenav-icon' />
                                Products
                            </li>
                        </Link>
                        <Link className='link' to={'/report'}>
                            <li className='sidenav-menu-list-item'>
                                <Assessment className='sidenav-icon' />
                                Report
                            </li>
                        </Link>
                        <Link className='link' to={'/transaction'}>
                            <li className='sidenav-menu-list-item'>
                                <Inventory className='sidenav-icon' />
                                Transaction
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Notifications</h3>
                    <ul className='sidenav-menu-list'>
                        <Link className='link' to={'/email'}>
                            <li className='sidenav-menu-list-item'>
                                <Email className='sidenav-icon' />
                                Email
                            </li>
                        </Link>
                        <Link className='link' to={'/messages'}>
                            <li className='sidenav-menu-list-item'>
                                <ChatBubble className='sidenav-icon' />
                                Messages
                            </li>
                        </Link>
                        <Link className='link' to={'/manage'}>
                            <li className='sidenav-menu-list-item'>
                                <Grading className='sidenav-icon' />
                                Manage
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className='sidenav-menu'>
                    <h3 className='sidenav-title'>Stats</h3>
                    <ul className='sidenav-menu-list'>
                        <Link className='link' to={'/manage'}>
                            <li className='sidenav-menu-list-item'>
                                <ManageAccounts className='sidenav-icon' />
                                Manage
                            </li>
                        </Link>
                        <Link className='link' to={'/analytics'}>
                            <li className='sidenav-menu-list-item'>
                                <Analytics className='sidenav-icon' />
                                Analytics
                            </li>
                        </Link>
                        <Link className='link' to={'/reports'}>
                            <li className='sidenav-menu-list-item'>
                                <Report className='sidenav-icon' />
                                Reports
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
