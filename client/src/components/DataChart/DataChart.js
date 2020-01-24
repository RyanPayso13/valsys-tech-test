import React from "react";
import * as utils from "../../libs/utils";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const DataChart = ({ chartFacts = [] }) => {
  const sortedFacts = utils.sortFacts(chartFacts);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={sortedFacts}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="period" />
        <YAxis dataKey="value" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataChart;
