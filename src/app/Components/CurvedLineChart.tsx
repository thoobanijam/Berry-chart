'use client'

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const CurvedLineChart = () => {
  const data: ChartData<"line"> = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Orders",
        data: [40, 66, 41, 89, 25, 44, 9, 54],
        borderColor: "white",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHitRadius: 10,
      }
    ]
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      intersect: false
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `Total Orders: ${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        min: 0,
        max: 100
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", marginBottom: '10px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CurvedLineChart;
