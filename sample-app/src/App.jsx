import React from "react";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  return (
    <>
      <h1>Welcome to Simple App</h1>
      {/* Render multiple userCards with different props */}
      <UserCard name="Abel" message="Welcome to React learning!" />
      <UserCard name="Siham" message="Hope you're having a great day!" />
      <UserCard name="Matt" message="Keep pushing forward!" />
    </>
  );
}

export default App;
