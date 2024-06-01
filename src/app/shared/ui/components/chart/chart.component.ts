import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: any;
  constructor() {}

  ngOnInit() {
    Chart.register(...registerables);
    this.chart = document.getElementById('my_first_chart');
    this.loadChart();
  }

  loadChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('my_first_chart');
    const ctx = canvas.getContext('2d');
    const gradientRed = ctx?.createLinearGradient(0, 0, 0, 400);

    gradientRed?.addColorStop(0, 'rgb(255 0 0 / .5)');
    gradientRed?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    const gradientOpen = ctx?.createLinearGradient(0, 0, 0, 400);
    gradientOpen?.addColorStop(0, 'rgb(100 100 100 / .5)');
    gradientOpen?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Serie 1',
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            borderColor: 'rgb(255 0 0 / 0.7)',
            backgroundColor: gradientRed,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255 0 0 / 0.7)',
            tension: 0.2,
            fill: true,
          },
          {
            label: 'Serie 1',
            data: [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23],
            borderColor: 'rgb(100 100 100 / 0.7)',
            backgroundColor: gradientOpen,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(100 100 100 / 0.7)',
            tension: 0.2,
            fill: true,
          },
        ],
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              tickBorderDash: [4, 3],
              // color: '#348632',
            },
          },
        },
      },
    });
  }
}
