import React from 'react';
import { KeyboardArrowUp, TrendingUp, ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featured-item featured-item-a'>
                <span className='featured-title'>Revenue</span>
                <div className='featured-money-container'>
                    <span className='featured-money'>$35,053</span>
                    <span className='featured-money-rate'>
                        -12.3
                        <KeyboardArrowUp className='featured-icon' />
                    </span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
            
            <div className='featured-item featured-item-b'>
                <span className='featured-title'>Sales</span>
                <div className='featured-money-container'>
                    <span className='featured-money'>$836,254</span>
                    <span className='featured-money-rate'>
                        -6.41
                        <TrendingUp className='featured-icon' />
                    </span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
            
            <div className='featured-item featured-item-c'>
                <span className='featured-title'>Return</span>
                <div className='featured-money-container'>
                    <span className='featured-money'>$52,542</span>
                    <span className='featured-money-rate'>
                        -15.9
                        <ArrowDownward className='featured-icon featured-icon-negative' />
                    </span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
            
            <div className='featured-item featured-item-d'>
                <span className='featured-title'>Profit</span>
                <div className='featured-money-container'>
                    <span className='featured-money'>$614,564</span>
                    <span className='featured-money-rate'>
                        -32.6
                        <ArrowUpward className='featured-icon' />
                    </span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
        </div>
    );
}

export default Featured;
