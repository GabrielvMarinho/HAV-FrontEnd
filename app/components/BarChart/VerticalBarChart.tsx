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
  import '../BarChart/css/style.css';
  
  ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  
  interface VerticalBarChartProps {
    data: number[]; // Valores para cada mês [julho, agosto, ...]
  }
  
  const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ data }) => {
    // Meses para exibição
    const meses = ['JANEIRO', 'MARÇO', 'MAIO', 'JULHO', 'SETEMBRO', 'NOVEMBRO'];
  
    const chartData = {
      labels: meses,
      datasets: [{
        label: '',
        data,
        backgroundColor: '#B23F52', // Vermelho
        borderWidth: 0,
        barThickness: 20, // Mais estreito
      }],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 75,
          ticks: {
            stepSize: 25, // 0, 25, 50, 75
            color: '#666',
            font: {
              size: 12,
              weight: 'bold',
            },
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          }
        },
        x: {
          ticks: {
            color: '#666',
            font: {
              size: 12,
              weight: 'bold',
            },
          },
          grid: {
            display: false, // Remove linhas verticais
          }
        }
      },
      plugins: {
        legend: { display: false },
      }
    };
  
    return (
      <div className="vertical-chart-container">
        <Bar 
          data={chartData} 
          options={options} 
        />
      </div>
    );
  };
  
  export default VerticalBarChart;