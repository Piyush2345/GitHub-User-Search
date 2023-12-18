import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import History from "./components/History";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const searchUser = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setSearchHistory((prevHistory) => [...prevHistory, response.data]);
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9 mb-4">
          <h1>GitHub User Search</h1>
          <Search onSubmit={searchUser} />
          {users.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
        <div className="col-md-6">
          {searchHistory.length > 0 && (
            <History history={searchHistory} clearHistory={clearHistory} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
