import React from 'react';
import MyBarChart from '../Charts/MyBarChart';
import MyLineChart from '../Charts/MyLineChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='dash-con'>
           <MyLineChart></MyLineChart> 
           <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;