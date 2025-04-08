import "./css/style.css"

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface HorizontalBarChartProps {
  labels: string[];
  data: number[];
  backGroundColors: string[]
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ labels, data, backGroundColors }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Imóveis',
        data,
        backgroundColor: backGroundColors,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default HorizontalBarChart;
