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
  
  interface VerticalBarChartProps {
    months: string[];
    values: number[];
  }
  
  const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ 
    months, 
    values 
  }) => {
    const chartData = {
      labels: months, // Isso já garante que os meses apareçam
      datasets: [{
        label: '',
        data: values,
        backgroundColor: '#B23F52',
        borderWidth: 0,
        barThickness: 24,
      }],
    };
  
    const options = {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 75,
          ticks: {
            stepSize: 25,
            color: '#B23F52',
            font: {
              size: 13,
              weight: '700',
            },
          },
          grid: {
            color: 'rgba(179, 63, 82, 0.2)',
            lineWidth: 1        
          }
        },
        x: {
          ticks: {
            display: true, // Garante que os meses sejam mostrados
            color: '#B23F52',
            font: {
              size: 14,
              weight: 'bold',
            },
            padding: 15
          },
          grid: {
            display: false,
          }
        }
      },
      plugins: {
        legend: { display: false },
      }
    };
  
    return (
      <div className="chart-container vertical-chart">
        <Bar
          data={chartData}
          options={options}
          width={600}
          height={200}
        />
      </div>
    );
  };
  
  export default VerticalBarChart;