import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h2>Total Bookings</h2>
                    <p>120</p>
                </div>
                <div className="dashboard-card">
                    <h2>Available Rooms</h2>
                    <p>35</p>
                </div>
                <div className="dashboard-card">
                    <h2>Revenue</h2>
                    <p>$15,000</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;