import React from "react";

function Location({ location }) {
  return (
    <div className="location">
      <h2>ISS is now located at:</h2>
      <p>Longitude: {location.longitude}, Latitude: {location.latitude}</p>
    </div>
  );
}

export default Location;
