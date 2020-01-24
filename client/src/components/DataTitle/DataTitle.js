import React from "react";

const DataTitle = ({ name = "", startYear = "" }) => {
  return (
    <h3>
      {name} {startYear}
    </h3>
  );
};

export default DataTitle;
