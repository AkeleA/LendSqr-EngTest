import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import UserTable from "../../Components/Users/Users";
import "./Dashboard.scss";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="topdash">
      <Navbar />
      <h1 className="userhead">Users</h1>
      <div className="first">
        <h3 className="firsttitle">USERS</h3>
        <p className="firstno">2,453</p>
      </div>
      <div className="second">
        <h3 className="secondtitle">ACTIVE USERS</h3>
        <p className="secondno">2,453</p>
      </div>
      <div className="third">
        <h3 className="thirdtitle">USERS WITH LOANS</h3>
        <p className="thirdno">12,453</p>
      </div>
      <div className="fourth">
        <h3 className="fourthtitle">USERS WITH SAVINGS</h3>
        <p className="fourthno">2,453</p>
      </div>
      <UserTable />
    </div>
  );
};

export default Dashboard;
