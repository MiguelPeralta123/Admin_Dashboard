import React from 'react';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import DisplayTotal from '../../components/displayTotal/DisplayTotal';
import OrderWidget from '../../components/orderWidget/OrderWidget';
import MembersWidget from '../../components/membersWidget/MembersWidget';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Featured />
            <div className='chart-widget'>
                <Chart />
                <DisplayTotal />
            </div>
            <div className='order-and-member-widget'>
                <OrderWidget />
                <MembersWidget />
            </div>
        </div>
    );
}

export default Home;
