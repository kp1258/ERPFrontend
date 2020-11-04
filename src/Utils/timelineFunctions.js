import { ClockIcon } from "../Components/Icons";
import React from "react";

export const defineColor = (date) => {
  var dateS = date.substring(0, 10);
  if (dateS === "0001-01-01") {
    return "gray";
  } else {
    return "green";
  }
};
export const defineDot = (currentDate, nextDate) => {
  let currentDateS = currentDate.substring(0, 10);
  let nextDateS = nextDate.substring(0, 10);
  if (currentDateS !== "0001-01-01" && nextDateS === "0001-01-01") {
    return <ClockIcon />;
  } else {
    return;
  }
};
