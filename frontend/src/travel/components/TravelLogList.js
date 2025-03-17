import React from "react";
import TravelLogItem from "./TravelLogItem";

const TravelLogList = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return <p>No travel logs available.</p>;
  }

  return (
    <div className="travel-log-list">
      {logs.map((log) => (
        <TravelLogItem key={log.id} log={log} />
      ))}
    </div>
  );
};

export default TravelLogList;