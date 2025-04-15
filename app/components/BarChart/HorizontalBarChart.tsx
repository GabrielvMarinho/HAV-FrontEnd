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
import './css/style.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface HorizontalBarChartProps {
  labels: string[];
  data: number[];
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ 
  labels, 
  data 
}) => {
  const chartData = {
    labels,
    datasets: [{
      label: 'Usuários',
      data,
      backgroundColor: '#B23F52', // ÚNICA COR (vermelho)
      borderWidth: 0,
      barThickness: 28,
    }],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 2000,
        ticks: {
          stepSize: 500,
          color: '#B23F52', // Cor dos números
          font: {
            size: 13,
            weight: '700' // Negrito
          },
          callback: (value: number) => [0, 500, 1000, 1500, 2000].includes(value) ? value : ''
        },
        grid: {
          color: 'rgba(179, 63, 82, 0.2)', // Linhas mais claras
          lineWidth: 1
        }
      },
      y: {
        ticks: {
          color: '#B23F52', // Cor dos rótulos
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 15
        },
        grid: {
          display: false // Remove linhas horizontais
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="chart-container">
      <Bar 
        data={chartData} 
        options={options} 
        width={600}
        height={200}
      />
    </div>
  );
};

export default HorizontalBarChart;