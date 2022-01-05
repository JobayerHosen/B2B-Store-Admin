import React from "react";
import { XAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from "recharts";

const Viewstats = () => {
  return (
    <div className="mx-auto h-100 dashboard-card mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Order Stats</h5>
      </div>
      <OrderChart></OrderChart>
    </div>
  );
};

export default Viewstats;

const OrderChart = () => {
  const data = [
    {
      id: 1,
      month: "Jan",
      Views: 2570,
      Return: 0,
      Orders: 1876,
    },
    {
      id: 2,
      month: "Feb",
      Views: 1356,
      Return: 11,
      Orders: 859,
    },
    {
      id: 3,
      month: "Mar",
      Views: 2949,
      Return: 32,
      Orders: 382,
    },
    {
      id: 4,
      month: "Apr",
      Views: 3806,
      Return: 78,
      Orders: 1577,
    },
    {
      id: 5,
      month: "May",
      Views: 3575,
      Return: 4,
      Orders: 948,
    },
    {
      id: 6,
      month: "Jun",
      Views: 3685,
      Return: 3,
      Orders: 175,
    },
    {
      id: 7,
      month: "Jul",
      Views: 2435,
      Return: 2,
      Orders: 694,
    },
    {
      id: 8,
      month: "Aug",
      Views: 1907,
      Return: 68,
      Orders: 538,
    },
    {
      id: 9,
      month: "Sep",
      Views: 2204,
      Return: 47,
      Orders: 321,
    },
    {
      id: 10,
      month: "Oct",
      Views: 4192,
      Return: 80,
      Orders: 1093,
    },
    {
      id: 11,
      month: "Nov",
      Views: 1027,
      Return: 55,
      Orders: 521,
    },
    {
      id: 12,
      month: "Dec",
      Views: 2955,
      Return: 7,
      Orders: 184,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", maxHeight: "220px", margin: "-1rem 0 0 0" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width="100%" data={data} margin={0}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
              <stop offset="85%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
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
            dataKey="Views"
            stroke="#8884d8"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorViews)"
          />
          <Area
            type="monotone"
            dataKey="Orders"
            stroke="#82ca9d"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
          <Area
            type="monotone"
            dataKey="Return"
            stroke="#fb9d5c"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorReturn)"
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
