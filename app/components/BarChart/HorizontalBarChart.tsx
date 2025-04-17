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
  maxValue?: number;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ 
  labels, 
  data,
  maxValue = 2000
}) => {
  // Configuração fixa do eixo X (0-2000)
  const getXAxisConfig = () => ({
    beginAtZero: true,
    max: maxValue,
    ticks: {
      stepSize: 500,
      color: '#B23F52',
      font: {
        size: 13,
        weight: '700',
      },
      callback: (value: number) => {
        const ticks = {
          0: '0',
          500: '500',
          1000: '1000',
          1500: '1500',
          2000: '2000'
        };
        return ticks[value as keyof typeof ticks] || '';
      }
    },
    grid: {
      color: (ctx: any) => {
        const showLinesAt = [0, 500, 1000, 1500, 2000];
        return showLinesAt.includes(ctx.tick.value) 
          ? 'rgba(179, 63, 82, 0.2)'
          : 'transparent';
      },
      lineWidth: 1
    }
  });

  const chartData = {
    labels,
    datasets: [{
      label: '',
      data,
      backgroundColor: '#B23F52',
      borderWidth: 0,
      barThickness: 28,
      categoryPercentage: 0.8,
      barPercentage: 0.9
    }],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: getXAxisConfig(),
      y: {
        ticks: {
          color: '#B23F52',
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 15
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: { display: false }
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 10
      }
    }
  };

  return (
    <div className="chart-container horizontal-chart">
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