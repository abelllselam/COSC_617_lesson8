import React from "react";

function userCard(props) {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default userCard;
