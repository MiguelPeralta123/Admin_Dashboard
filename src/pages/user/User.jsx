import React, { useEffect, useState } from 'react';
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { usersData } from '../../data/usersData';
import './User.css'

const User = () => {

    const { userId } = useParams()
    const [user, setUser] = useState([]);

    useEffect(() => {
        const userIdInt = parseInt(userId, 10);
        setUser(usersData.find(user => user.id === userIdInt));
    }, [userId])

    console.log(user)

    return (
        <div className='top-container'>
            <div className='title-container'>
                <h1 className='title'>Edit Profile</h1>
                <Link to={'/user/create'}>
                    <button className='btn-add-user'>Create User</button>
                </Link>
            </div>
            <div className='user-profile-container'>
                <div className='user-info'>
                    <div className='user-info-top'>
                        <img className='user-info-image' src={`/${user.avatar}`} alt='User' />
                        <div className='user-top-details'>
                            <span className='user-name'>{user.name}</span>
                            <span className='user-title'>{user.title}</span>
                        </div>
                    </div>
                    <div className='user-info-bottom'>
                        <span className='user-info-title'>Account Details</span>
                        <div className='user-info-details'>
                            <PermIdentity className='user-info-icon' />
                            <span className='user-info-label'>{user.username}</span>
                        </div>
                        <div className='user-info-details'>
                            <CalendarToday className='user-info-icon' />
                            <span className='user-info-label'>{user.dateofbirth}</span>
                        </div>
                        <div className='user-info-details'>
                            <PhoneAndroid className='user-info-icon' />
                            <span className='user-info-label'>{user.phone}</span>
                        </div>
                        <div className='user-info-details'>
                            <MailOutline className='user-info-icon' />
                            <span className='user-info-label'>{user.email}</span>
                        </div>
                        <div className='user-info-details'>
                            <LocationSearching className='user-info-icon' />
                            <span className='user-info-label'>{user.address}</span>
                        </div>
                    </div>
                </div>

                <div className='user-update'>
                    <span className='user-update-title'>Edit User</span>
                    <form className='user-update-form'>
                        <div className='user-update-form-left'>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Username</label>
                                <input className='user-update-form-input' type='text' placeholder={user.username} />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Full name</label>
                                <input className='user-update-form-input' type='text' placeholder={user.name} />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Phone</label>
                                <input className='user-update-form-input' type='text' placeholder={user.phone} />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Email</label>
                                <input className='user-update-form-input' type='text' placeholder={user.email} />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Address</label>
                                <input className='user-update-form-input' type='text' placeholder={user.address} />
                            </div>
                        </div>

                        <div className='user-update-form-right'>
                            <div className='user-update-form-image'>
                                <img className='user-update-image' src={`/${user.avatar}`} alt='User Update' />
                                <label className='user-update-label' htmlFor='file'><Publish className='user-update-icon' /></label>
                                <input id='file' type='file' style={{ display: 'none' }} />
                            </div>

                            <button className='user-update-form-submit' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <Link className='link' to={'/users'}>
                <button className='btn-back' type='submit'>
                    <ArrowBack />
                    Back
                </button>
            </Link>
        </div>
    );
}

export default User;
