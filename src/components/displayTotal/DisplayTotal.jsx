import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import './DisplayTotal.css'

const DisplayTotal = () => {
    return (
        <div className='display-container'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
            </div>
            <div className='bottom'>
                <div className='featured-chart'>
                    <CircularProgressbarWithChildren
                        value={80}
                        text={`${80}%`}
                        strokeWidth={10}
                        styles={buildStyles({
                            strokeLinecap:'butt',
                        })} />
                </div>
                <p className='title'>Total sales per day</p>
                <p className='amount'>789</p>
                <p className='description'>Processing of previous transactions, last payment might not be accounted for</p>

                <div className='summary'>
                    <div className='item'>
                        <div className='item-title'>Daily target</div>
                        <div className='item-result negative'>
                            <KeyboardArrowDown fontSize='small' />
                            <div className='result-amount'>$8,954</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>Last week</div>
                        <div className='item-result positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <div className='result-amount'>$10,257</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>Monthly target</div>
                        <div className='item-result positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <div className='result-amount'>$54,154</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayTotal;
