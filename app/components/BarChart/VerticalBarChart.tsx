import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title as ChartTitle,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import React from 'react';
  import './css/style.css';
  
  ChartJS.register(BarElement, CategoryScale, LinearScale, ChartTitle, Tooltip, Legend);
  
  interface VerticalBarChartProps {
    months: string[];
    values: number[];
    title?: string;
    scaleType?: 'default' | 'thousands';
    width?: number;
    height?: number;
  }
  
  const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ 
    months, 
    values, 
    title, 
    scaleType = 'default',
    width = 700, // Aumentado para acomodar barras mais largas
    height = 250
  }) => {
    // Configuração do eixo Y com espaçamento proporcional para 20k-60k-100k
    const getYAxisConfig = () => {
      if (scaleType === 'thousands') {
        return {
          beginAtZero: true,
          max: 100000,
          ticks: {
            callback: (value: number) => {
              const ticks = {
                0: '0',
                20000: '20k',
                60000: '60k',
                100000: '100k'
              };
              return ticks[value as keyof typeof ticks] || '';
            },
            color: '#B23F52',
            font: {
              size: 13,
              weight: '700',
            },
            // Define os valores específicos com espaçamento proporcional
            values: [0, 20000, 60000, 100000],
          },
          grid: {
            color: (ctx: any) => {
              const showLinesAt = [0, 20000, 60000, 100000];
              return showLinesAt.includes(ctx.tick.value) 
                ? 'rgba(179, 63, 82, 0.2)'
                : 'transparent';
            },
            lineWidth: 1,
          },
          // Ajuste para espaçamento proporcional
          afterBuildTicks: (scale: any) => {
            scale.ticks = [0, 20000, 60000, 100000].map(value => ({ value }));
            return;
          }
        };
      } else {
        // Configuração padrão 0-25-50-75
        return {
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
            color: (ctx: any) => {
              const showLinesAt = [0, 25, 50, 75];
              return showLinesAt.includes(ctx.tick.value)
                ? 'rgba(179, 63, 82, 0.2)'
                : 'transparent';
            },
            lineWidth: 1,
          },
        };
      }
    };
  
    const chartData = {
      labels: months,
      datasets: [{
        label: title || '',
        data: values,
        backgroundColor: '#B23F52',
        borderWidth: 0,
        barThickness: 50, // Aumentado para 50px
        categoryPercentage: 0.6, // Controla o espaço entre categorias (0.8 = 80% do espaço disponível)
        barPercentage: 0.9, // Controla a largura da barra em relação ao espaço alocado
      }],
    };
  
    const options = {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        y: getYAxisConfig(),
        x: {
          ticks: {
            color: '#B23F52',
            font: {
              size: 14,
              weight: 'bold',
            },
            padding: 10,
          },
          grid: {
            display: false,
          },
          // Ajuste para diminuir espaçamento entre categorias
          afterFit: (scale: any) => {
            scale.width = scale.width * 0.9; // Reduz o espaço entre categorias
          }
        },
      },
      plugins: {
        legend: { display: false },
      },
      // Ajuste de layout geral
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      }
    };
  
    return (
      <div className="chart-container vertical-chart">
        <Bar
          data={chartData}
          options={options}
          width={width}
          height={height}
        />
      </div>
    );
  };
  
  export default VerticalBarChart;