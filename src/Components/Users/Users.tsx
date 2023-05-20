import React, { useEffect, useState } from "react";
import "./Users.scss";
import axios from "axios";

interface User {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="user-table">
      <div className="header-row">
        <div className="header-cell">Organisation</div>
        <div className="header-cell">Username</div>
        <div className="header-cell">Email</div>
        <div className="header-cell">Phone Number</div>
        <div className="header-cell">Date Joined</div>
        <div className="header-cell">Status</div>
      </div>
      {currentUsers.map((user) => (
        <div key={user.id} className="data-row">
          <div className="cell1">{user.orgName}</div>
          <div className="cell2">{user.userName}</div>
          {/**<div className="cell3">{user.email}</div>
          <div className="cell4">{user.phoneNumber}</div>
          <div className="cell5">{user.createdAt}</div>
      <div className="cell6">{user.lastActiveDate}</div> **/}
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              className={`page-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default UserTable;
