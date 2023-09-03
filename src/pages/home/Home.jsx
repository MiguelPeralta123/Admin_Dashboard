import React from 'react';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import './Home.css'
import DisplayTotal from '../../components/displayTotal/DisplayTotal';

const Home = () => {
    return (
        <div className='home-container'>
            <Featured />
            <div className='chart-widget'>
                <Chart />
                <DisplayTotal />
            </div>
        </div>
    );
}

export default Home;
