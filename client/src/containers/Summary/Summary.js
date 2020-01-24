import React, { useEffect, useState } from "react";
import * as CONSTANTS from "../../constants";
import DataTable from "../../components/DataTable/DataTable";
import DataTitle from "../../components/DataTitle/DataTitle";

const Summary = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const result = await fetch(`${CONSTANTS.API_BASE_URL}/summary`);
      result.json().then(data => setData(data.data));
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div data-testid="summary-container">
      {data && data.name && data.startYear && (
        <DataTitle name={data.name} startYear={data.startYear} />
      )}
      {data && data.dcfItems && data.dcfItems.length > 0 && (
        <DataTable items={data.dcfItems} />
      )}
    </div>
  );
};

export default Summary;
