import React, { useEffect, useState, useContext } from "react";
import TravelLogList from "../components/TravelLogList";
import { getTravelLogsByUserId } from "../../shared/util/dataGetters"; // Importing the new method
import AuthContext from "../../shared/context/auth-context";
import "./TravelLogs.css";

const TravelLogs = () => {
  const { Credentials } = useContext(AuthContext); // Getting the logged-in user's credentials
  const [travelLogs, setTravelLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        // Using the getTravelLogsByUserId function to fetch the logs
        const logs = await getTravelLogsByUserId(Credentials.userId);
        if (logs) {
          setTravelLogs(logs);
        } else {
          setError("No travel logs found for this user.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (Credentials.userId) {
      fetchLogs();
    }
  }, [Credentials.userId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-posts">
      <h1>My Travel Logs</h1>
      <TravelLogList logs={travelLogs} />
    </div>
  );
};

export default TravelLogs;
