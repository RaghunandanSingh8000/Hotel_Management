import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-10">
      <h1 className="text-4xl font-extrabold mb-10 text-[#6a4fb6] font-['Playfair_Display',serif] drop-shadow text-center">
        Hotel Management Dashboard
      </h1>
      <div className="dashboard-cards grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="dashboard-card bg-white/90 rounded-3xl shadow-2xl p-8 border-4 border-yellow-400 flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#232946] mb-2">Total Bookings</h2>
          <p className="text-3xl font-extrabold text-[#6a4fb6]">120</p>
        </div>
        <div className="dashboard-card bg-white/90 rounded-3xl shadow-2xl p-8 border-4 border-green-400 flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#232946] mb-2">Available Rooms</h2>
          <p className="text-3xl font-extrabold text-green-700">35</p>
        </div>
        <div className="dashboard-card bg-white/90 rounded-3xl shadow-2xl p-8 border-4 border-purple-400 flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#232946] mb-2">Revenue</h2>
          <p className="text-3xl font-extrabold text-purple-700">$15,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;