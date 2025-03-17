import React, { useEffect, useState } from "react";
import { getCity } from "../../shared/util/dataGetters";

const TravelLogItem = ({ log }) => {
  const [cityName, setCityName] = useState(""); // State variable to hold the city name
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        // Assuming getCity(id) fetches city information by CityID
        const cityData = await getCity(log.CityID);
        if (cityData) {
          setCityName(cityData.Name); // Update the city name state
        } else {
          setError("City not found.");
        }
      } catch (err) {
        setError("Failed to fetch city data.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (log.CityID) {
      fetchCity(); // Trigger the fetch when the CityID is available
    }
  }, [log.CityID]); // Dependency array ensures the effect runs when CityID changes

  if (isLoading) return <p>Loading city...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="travel-log-item">
      <h3>{cityName}</h3> {/* Displaying the city name */}
      <p><strong>Date:</strong> {log.Date}</p> {/* Ensure log.Date is being used */}
      <p><strong>Duration:</strong> {log.DurationOfStay} days</p>
    </div>
  );
};

export default TravelLogItem;
