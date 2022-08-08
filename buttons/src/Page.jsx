import React, { useState, useEffect } from "react";
import { userdata } from "./data";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [usersPerPage] = useState(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userdata.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const next = () => {
    if (currentPage < Math.ceil(userdata.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {currentUsers.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        );
      })}
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default Page;
