import React from "react";
const TimeLabel = ({ date }) => {
  return (
    <div>
      {date.substring(0, 10) !== "0001-01-01" ? (
        <div>{date.substring(0, 10)}</div>
      ) : (
        <div style={{ height: "15px" }}> </div>
      )}
    </div>
  );
};

export default TimeLabel;
