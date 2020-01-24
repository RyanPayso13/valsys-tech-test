import React from "react";
import DataFacts from "../DataFacts/DataFacts";

const DataTable = ({ items = [], hasFacts = false, startYear = "" }) => {
  return (
    <table
      data-testid="data-table"
      className="bp3-html-table bp3-html-table-bordered"
    >
      <thead>
        <tr>
          <th>UID</th>
          <th>NAME</th>
          {hasFacts && <th>FACTS</th>}
          <th>ORDER</th>
          <th>TYPE</th>
          <th>VALUE</th>
          <th>TAG</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.uid}</td>
                <td>{item.name}</td>
                {hasFacts && item.facts && item.facts.length > 0 && (
                  <td>
                    <DataFacts facts={item.facts} startYear={startYear} />
                  </td>
                )}
                <td>{item.order}</td>
                <td>{item.type}</td>
                <td>{item.value}</td>
                <td>{item.tag}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DataTable;
