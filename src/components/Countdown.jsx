import React from 'react';
import 'animate.css';


const Countdown = () => {
    return (
    
        <div className="stats shadow m-auto w-11/12 py-8 animate__animated animate__bounce">
        <div className="stat place-items-center">
          <div className="stat-title">Total Visits</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
      
        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>
        
    );
};

export default Countdown;