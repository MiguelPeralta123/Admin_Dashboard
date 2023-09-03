import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = () => {

    const data = [
        {
            Name: "Jan",
            Expensis: 5000,
            Returns: 2900,
            Total: 12000,
        },
        {
            Name: "Feb",
            Expensis: 7000,
            Returns: 900,
            Total: 13000,
        },
        {
            Name: "March",
            Expensis: 1200,
            Returns: 6000,
            Total: 25300,
        },
        {
            Name: "April",
            Expensis: 9200,
            Returns: 900,
            Total: 17780,
        },
        {
            Name: "May",
            Expensis: 12000,
            Returns: 5000,
            Total: 6890,
        },
        {
            Name: "June",
            Expensis: 3900,
            Returns: 2100,
            Total: 10390,
        },
        {
            Name: "July",
            Expensis: 7300,
            Returns: 3400,
            Total: 30344,
        },
    ];

    return (
        <div className='chart-container'>
            <AreaChart
                width={800} height={320}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff5733" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ff5733" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="Name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Expensis" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Returns" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="Total" stroke="#ff5733" fillOpacity={1} fill="url(#colorRv)" />
            </AreaChart>
        </div>
    );
}

export default Chart;
