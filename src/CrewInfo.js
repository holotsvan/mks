import React from "react";

function CrewInfo({ crew }) {
  return (
    <div className="crew-info">
      <h2>Current Crew on ISS:</h2>
      <ul>
        {crew.map((member) => (
          <li key={member.name}>
            <img className="avatar" src="https://cdn.imgchest.com/files/k739cnzj2r7.png" alt="avatar" /> {member.name}
          </li>
        ))}
      </ul>
      <p>Total amount: {crew.length} people on ISS</p>
    </div>
  );
}

export default CrewInfo;
