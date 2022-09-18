import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to our task application</h1>
      <div className="links App-link">
        <div>
          <a className="home-page" href="/home">
            Home page &rarr;
          </a>
        </div>
        <div>
          <a className="second-page" href="/second-page">
            Second page &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
