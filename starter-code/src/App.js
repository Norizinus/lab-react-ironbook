import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./Components/UserList";
import users from "./users";

function App() {
  return (
    <div className="App">
      <UserList data={users} />
    </div>
  );
}

export default App;
