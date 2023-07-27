'use client'
import React from "react";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  response: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "second"
      }
    }
  }
};

const values = [
    {
      "units": 110673,
      "timestamp": 1659312000
    },
    {
      "units": 132099,
      "timestamp": 1659398400
    },
    {
      "units": 105633,
      "timestamp": 1659484800
    },
    {
      "units": 143695,
      "timestamp": 1659571200
    },
    {
      "units": 100634,
      "timestamp": 1659657600
    },
    {
      "units": 64226,
      "timestamp": 1659744000
    },
    {
      "units": 60486,
      "timestamp": 1659830400
    },
    {
      "units": 88617,
      "timestamp": 1659916800
    },
    {
      "units": 194388,
      "timestamp": 1660003200
    },
    {
      "units": 99924,
      "timestamp": 1660089600
    },
    {
      "units": 97189,
      "timestamp": 1660176000
    },
    {
      "units": 63740,
      "timestamp": 1660262400
    },
    {
      "units": 70804,
      "timestamp": 1660348800
    },
    {
      "units": 30257,
      "timestamp": 1660435200
    },
    {
      "units": 10608,
      "timestamp": 1660521600
    }
  ];

export const data = {
  datasets: [
    {
      data: values.map(res => ({ x: res.timestamp, y: res.units })),
      borderColor: "#CE55FF" 
    }
  ]
};

export default function App() {
  return <Line options={options as any} data={data} />;
}
