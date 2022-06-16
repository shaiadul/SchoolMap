import React from 'react';
import map from "../../images/map.png"
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LinesChart = () => {
    
    // data for chart analysis
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className=''>
            <p className='text-center font-extrabold text-green-400 text-2xl my-6 uppercase'>Annually revenue Analysis</p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center mx-auto'>
                {/* this is chart no 01 */}
                <div className='mt-10 text-center mx-auto w-full'>
                
                    <LineChart className='line-chart' width={370} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </div>
                {/* this SchoolMap Map */}
                <div className='mt-10 text-center mx-auto w-auto'>
                    <img className='w-full mx-auto' src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LinesChart;