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
import '../BarChart/css/style.css'

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface HorizontalBarChartProps {
  proprietarios: number;
  usuariosComuns: number;
  bloqueados: number;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ 
  proprietarios,
  usuariosComuns,
  bloqueados
}) => {
  const chartData = {
    labels: [
      `${Math.round((proprietarios/(proprietarios+usuariosComuns+bloqueados))*100)}% PROPRIETÁRIOS`,
      `${Math.round((usuariosComuns/(proprietarios+usuariosComuns+bloqueados))*100)}% USUÁRIOS COMUNS`,
      `${Math.round((bloqueados/(proprietarios+usuariosComuns+bloqueados))*100)}% BLOQUEADOS`
    ],
    datasets: [{
      label: 'Usuários',
      data: [proprietarios, usuariosComuns, bloqueados],
      backgroundColor: [
        '#B23F52',
      ],
      borderWidth: 0,
      barThickness: 28, // Espessura fixa das barras
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
          color: '#666',
          font: {
            size: 12,
          },
          callback: function(value) {
            return [0, 500, 1000, 1500, 2000].includes(value) ? value : '';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawTicks: false,
        }
      },
      y: {
        ticks: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: 10,
        },
        grid: {
          display: false,
        }
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
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