import { HttpErrorResponse } from '@angular/common/http';
import { verifyHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';
import { filterTicket } from 'src/app/core/utils/helpers';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  ticketListOpen: Ticket[] = [];
  ticketListCanceled: Ticket[] = [];
  ticketListRejected: Ticket[] = [];
  ticketListResolved: Ticket[] = [];

  chart: any;
  Role = Role;
  roles: string[] = [];
  user?: IUser;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getUser();
    this.getRoles();

    Chart.register(...registerables);
    this.chart = document.getElementById('my_first_chart');
    // this.getAllTickets();
    if (this.roles?.includes(Role.helpDesk) || this.roles?.includes(Role.admin))
      this.getAllTickets();
    else if (
      this.roles?.includes(Role.user) &&
      !this.roles?.includes(Role.helpDesk) &&
      !this.roles?.includes(Role.admin)
    ) {
      this.getTicketsForUser();
    }
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketProcess(tickets);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTicketsForUser() {
    console.log('this.user?.username, ', this.user?.username);
    if (this.user?.username) {
      this.ticketService.getTickestForUser(this.user?.username).subscribe({
        next: (tickets: Ticket[]) => {
          this.ticketProcess(tickets);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  loadChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('my_first_chart');
    const ctx = canvas.getContext('2d');

    const gradientOpen = ctx?.createLinearGradient(0, 0, 0, 400);
    gradientOpen?.addColorStop(0, 'rgb(100 100 100 / .5)');
    gradientOpen?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    const gradientCanceled = ctx?.createLinearGradient(0, 0, 0, 400);
    gradientCanceled?.addColorStop(0, 'rgb(255 0 0 / .5)');
    gradientCanceled?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    const gradientResolved = ctx?.createLinearGradient(0, 0, 0, 400);
    gradientResolved?.addColorStop(0, 'rgb(6 148 162 / .5)');
    gradientResolved?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    const gradientRejected = ctx?.createLinearGradient(0, 0, 0, 400);
    gradientRejected?.addColorStop(0, 'rgb(194 120 3 / .5)');
    gradientRejected?.addColorStop(1, 'rgb(255 255 255 / 0.2)');

    const verticalHoverLine = {
      id: 'verticalHoverLine',
      beforeDatasetDraw(chart: any, args: any, plugins: any) {
        const {
          ctx,
          chartArea: { top, bottom, right },
        } = chart;
        ctx.save();

        chart
          .getDatasetMeta(0, 1, 2, 3)
          .data.forEach((dataPoint: any, index: number) => {
            if (dataPoint.active === true) {
              ctx.beginPath();
              ctx.strokeStyle = 'gray';
              ctx.moveTo(dataPoint.x, top);
              ctx.lineTo(dataPoint.x, bottom);
              ctx.stroke();
            }
          });
      },
    };

    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Ticket Open',
            data: this.filterTicketByMonth(this.ticketListOpen),
            borderColor: 'rgb(100 100 100 / 0.7)',
            backgroundColor: gradientOpen,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(100 100 100 / 0.7)',
            tension: 0.2,
            fill: true,
          },
          {
            label: 'Ticket Canceled',
            data: this.filterTicketByMonth(this.ticketListCanceled),
            borderColor: 'rgb(255 0 0 / 0.7)',
            backgroundColor: gradientCanceled,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255 0 0 / 0.7)',
            tension: 0.2,
            fill: true,
          },
          {
            label: 'Ticket Resolved',
            data: this.filterTicketByMonth(this.ticketListResolved),
            borderColor: 'rgb(6 148 162 / 0.7)',
            backgroundColor: gradientResolved,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(6 148 162 / 0.7)',
            tension: 0.2,
            fill: true,
          },
          {
            label: 'Ticket Rejected',
            data: this.filterTicketByMonth(this.ticketListRejected),
            borderColor: 'rgb(194 120 3 / 0.7)',
            backgroundColor: gradientRejected,
            pointRadius: 0,
            borderWidth: 2,
            pointBackgroundColor: 'rgb(194 120 3 / 0.7)',
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
        interaction: {
          mode: 'index',
          intersect: false,
        },
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
      plugins: [verticalHoverLine],
    });
  }

  filterTicketByMonth(tickets: Ticket[]): number[] {
    let monthCounts: number[] = new Array(12).fill(0);

    tickets.forEach((ticket: Ticket) => {
      const date = new Date(ticket.createdTime);

      const month = date.getMonth();

      monthCounts[month]++;
    });

    return monthCounts;
  }

  ticketProcess(tickets: Ticket[]) {
    this.ticketListOpen = filterTicket(tickets, 'status', TaskStatus.open);
    this.ticketListCanceled = filterTicket(
      tickets,
      'status',
      TaskStatus.canceled
    );
    this.ticketListRejected = filterTicket(
      tickets,
      'status',
      TaskStatus.rejected
    );
    this.ticketListResolved = filterTicket(
      tickets,
      'status',
      TaskStatus.resolved
    );
    this.loadChart();
  }
}
