'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Chart Data
const data: ChartData<'bar'> = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [
    {
      label: 'Investment',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
      backgroundColor: '#eef2f6',
    },
    {
      label: 'Loss',
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
      backgroundColor: '#1e88e5',
    },
    {
      label: 'Profit',
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
      backgroundColor: '#5e35b1',
    },
    {
      label: 'Maintenance',
      data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 220],
      backgroundColor: '#ede7f6',
    },
  ],
};

// Custom plugin for top-left text

// Chart Options
const options: ChartOptions<'bar'> = {
  responsive: true,
  layout: {
    padding: {
      top: 50, // extra space so top text doesn't overlap
      right: 10,
      bottom: 10,
      left: 10,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  scales: {
    x: {
      stacked: true,
    },
   y: {
  stacked: true,
  min: 0,
  max: 400,
  ticks: {
    stepSize: 100
  }
}


  },
};

const BarChart = () => {
  return <Bar data={data} options={options}  />;
};

export default BarChart;
