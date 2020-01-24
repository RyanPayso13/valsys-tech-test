import React from "react";
import "./DataFacts.css";

const DataFacts = ({ facts = [], startYear = null }) => {
  const sortedFacts = [...facts].sort((a, b) => b.period - a.period);
  const setClassName = period => (period > startYear ? "facts-table-row" : "");

  return (
    <table
      data-testid="data-facts"
      className="bp3-small facts-table"
      cellPadding="0"
      cellSpacing="0"
    >
      <thead className="facts-table-header">
        <tr>
          <th>UID</th>
          <th>VALUE</th>
        </tr>
      </thead>
      <tbody>
        {facts &&
          facts.length > 0 &&
          sortedFacts.map((fact, index) => {
            return (
              <tr className={setClassName(fact.period)} key={index}>
                <td>{fact.period}</td>
                <td>{fact.value}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DataFacts;
