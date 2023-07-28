"use client";
import React, { useEffect, useState } from "react";
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
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartData, TimeseriesData } from "@/app/utils/types";

// Register required Chart.js components
ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Chart options
export const options = {
  response: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "time",
      ticks: {
        // Custom tick format for x-axis
        callback: function (value: any, index: any, ticks: any) {
          try {
            return new Date(value).getDate();
          } catch (error) {
            return "err"; // If there's an error, display 'err'
          }
        },
      },
      time: {
        unit: "day", // x-axis displays time in units of days
        displayFormats: {
          quarter: "dd", // Custom display format for the tooltip (quarter not used here)
        },
      },
    },
    y: {
      ticks: {
        // Custom tick format for y-axis
        callback: function (value: any, index: any, ticks: any) {
          try {
            return value / 1000 + "k"; // Display values in thousands with 'k' suffix
          } catch (error) {
            return "err"; // If there's an error, display 'err'
          }
        },
      },
    },
  },
};

export default function LineChart({ data }: { data: TimeseriesData[] }) {
  const [values, setValues] = useState(data);

  useEffect(() => {
    // Update the state when the data prop changes
    setValues(data);
  }, [data]);

  const tempData = {
    datasets: [
      {
        // Map data to x and y coordinates for the chart
        data: values.map((res) => ({
          x: new Date(res.timestamp * 1000),
          y: res.units,
        })),
        borderColor: "#CE55FF", // Set the border color for the dataset
      },
    ],
  };
  return <Line options={options as any} data={tempData} />;
}
