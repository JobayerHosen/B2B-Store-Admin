import React from "react";
import { XAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from "recharts";

const Statistics = () => {
  return (
    <div className="mx-auto h-100 dashboard-card mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Statistics</h5>
      </div>
      <StatsChart></StatsChart>
    </div>
  );
};

export default Statistics;

const StatsChart = () => {
  const data = [
    {
      id: 1,
      month: "Jan",
      Sales: 12570,
      Cost: 9440,
      Profit: 13876,
    },
    {
      id: 2,
      month: "Feb",
      Sales: 10356,
      Cost: 13011,
      Profit: 6859,
    },
    {
      id: 3,
      month: "Mar",
      Sales: 12949,
      Cost: 13732,
      Profit: 2382,
    },
    {
      id: 4,
      month: "Apr",
      Sales: 14806,
      Cost: 11478,
      Profit: 4577,
    },
    {
      id: 5,
      month: "May",
      Sales: 14975,
      Cost: 9794,
      Profit: 4948,
    },
    {
      id: 6,
      month: "Jun",
      Sales: 13685,
      Cost: 7303,
      Profit: 9175,
    },
    {
      id: 7,
      month: "Jul",
      Sales: 13035,
      Cost: 14302,
      Profit: 7694,
    },
    {
      id: 8,
      month: "Aug",
      Sales: 11007,
      Cost: 16168,
      Profit: 9538,
    },
    {
      id: 9,
      month: "Sep",
      Sales: 12204,
      Cost: 10547,
      Profit: 3021,
    },
    {
      id: 10,
      month: "Oct",
      Sales: 18192,
      Cost: 14880,
      Profit: 11093,
    },
    {
      id: 11,
      month: "Nov",
      Sales: 9327,
      Cost: 13455,
      Profit: 2521,
    },
    {
      id: 12,
      month: "Dec",
      Sales: 16955,
      Cost: 8947,
      Profit: 5184,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", maxHeight: "220px", margin: "-1rem 0 0 0" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width="100%" data={data} margin={0}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
              <stop offset="85%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fb9d5c" stopOpacity={0.3} />
              <stop offset="75%" stopColor="#fb9d5c" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" tick={<CustomizedAxisTick />} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />

          <Area
            type="monotone"
            dataKey="Sales"
            stroke="#8884d8"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="Cost"
            stroke="#fb9d5c"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorCost)"
          />
          <Area
            type="monotone"
            dataKey="Profit"
            stroke="#82ca9d"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorProfit)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#bbb" transform="rotate(-35)" fontSize=".7rem">
        {payload.value}
      </text>
    </g>
  );
};
