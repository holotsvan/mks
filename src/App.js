import "./App.css";
import React, { useState, useEffect } from "react";
import { getLocation, getCrew } from "./api";
import Location from "./Location";
import CrewInfo from "./CrewInfo";
import Map from "./Map";

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [crew, setCrew] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const location = await getLocation();
      setLocation({
        latitude: location.iss_position.latitude,
        longitude: location.iss_position.longitude,
      });

      const crew = await getCrew();
      setCrew(crew.people.filter((person) => person.craft === "ISS"));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Watching ISS</h1>
      <div className="info-container">
        <Location location={location} />
        <div className="time">
          <h2>Current UTC time:</h2>
          <p>{time.toUTCString()}</p>
        </div>
      </div>
      <Map location={location}></Map>
      <CrewInfo crew={crew} />
    </div>
  );
}

export default App;
