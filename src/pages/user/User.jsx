import React from 'react';
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@mui/icons-material';
import './User.css'

const User = () => {
    return (
        <div className='top-container'>
            <div className='title-container'>
                <h1 className='title'>Edit Profile</h1>
                <button className='btn-add-user'>Create User</button>
            </div>
            <div className='user-profile-container'>
                <div className='user-info'>
                    <div className='user-info-top'>
                        <img className='user-info-image' src='/images/members/miguel.png' alt='User' />
                        <div className='user-top-details'>
                            <span className='user-name'>Miguel Peralta</span>
                            <span className='user-title'>React Developer</span>
                        </div>
                    </div>
                    <div className='user-info-bottom'>
                        <span className='user-info-title'>Account Details</span>
                        <div className='user-info-details'>
                            <PermIdentity className='user-info-icon' />
                            <span className='user-info-label'>MaikPeralta</span>
                        </div>
                        <div className='user-info-details'>
                            <CalendarToday className='user-info-icon' />
                            <span className='user-info-label'>Sept 09, 2023</span>
                        </div>
                        <div className='user-info-details'>
                            <PhoneAndroid className='user-info-icon' />
                            <span className='user-info-label'>6624042391</span>
                        </div>
                        <div className='user-info-details'>
                            <MailOutline className='user-info-icon' />
                            <span className='user-info-label'>l18330484@hermosillo.tecnm.mx</span>
                        </div>
                        <div className='user-info-details'>
                            <LocationSearching className='user-info-icon' />
                            <span className='user-info-label'>Hermosillo, Son.</span>
                        </div>
                    </div>
                </div>

                <div className='user-update'>
                    <span className='user-update-title'>Edit User</span>
                    <form className='user-update-form'>
                        <div className='user-update-form-left'>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Username</label>
                                <input className='user-update-form-input' type='text' placeholder='MaikPeralta' />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Full name</label>
                                <input className='user-update-form-input' type='text' placeholder='Miguel Peralta' />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Phone</label>
                                <input className='user-update-form-input' type='text' placeholder='6624042391' />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Email</label>
                                <input className='user-update-form-input' type='text' placeholder='l18330484@hermosillo.tecnm.mx' />
                            </div>
                            <div className='user-update-form-item'>
                                <label className='user-update-form-label'>Address</label>
                                <input className='user-update-form-input' type='text' placeholder='Hermosillo, Son.' />
                            </div>
                        </div>

                        <div className='user-update-form-right'>
                            <div className='user-update-form-image'>
                                <img className='user-update-image' src='/images/members/miguel.png' alt='User Update' />
                                <label className='user-update-label' htmlFor='file'><Publish className='user-update-icon' /></label>
                                <input id='file' type='file' style={{display: 'none'}} />
                            </div>

                            <button className='user-update-form-submit' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;
