import React from 'react';
import './CreateUser.css'

const CreateUser = () => {
    return (
        <div className='create-user-container'>
            <h1 className='create-user-title'>Create User</h1>
            <form className='create-user-form'>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Username</label>
                    <input className='create-user-form-input' type='text' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Full name</label>
                    <input className='create-user-form-input' type='text' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Email</label>
                    <input className='create-user-form-input' type='email' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Password</label>
                    <input className='create-user-form-input' type='password' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Phone number</label>
                    <input className='create-user-form-input' type='tel' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Address</label>
                    <input className='create-user-form-input' type='text' />
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Gender</label>
                    <div className='create-user-form-gender'>
                        <input type='radio' name='gender' value='male' id='male' />
                        <label htmlFor='male'>Male</label>

                        <input type='radio' name='gender' value='female' id='female' />
                        <label htmlFor='female'>Female</label>

                        <input type='radio' name='gender' value='other' id='other' />
                        <label htmlFor='other'>Other</label>
                    </div>
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Country</label>
                    <select className='create-user-form-select' name='country' id='country'>
                        <option value='Mexico'>Mexico</option>
                        <option value='Canada'>Canada</option>
                        <option value='usa'>USA</option>
                        <option value='other'>Other</option>
                    </select>
                </div>

                <div className='create-user-form-item'>
                    <label className='create-user-form-label'>Active</label>
                    <select className='create-user-form-select' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>

                <button className='create-user-form-submit' type='submit'>Save</button>
            </form>
        </div>
    );
}

export default CreateUser;
