import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';
import { UpdateAssignedToDto } from 'src/app/shared/ui/components/affected-shared/affected-shared.component';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent {
  explanation: string = '';
  isExplanationValid: boolean = false;
  isAffectedValid: boolean = false;
  TaskStatus = TaskStatus;

  constructor(
    public dialogRef: MatDialogRef<ExplanationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (
      (this.data.status === TaskStatus.canceled ||
        this.data.status === TaskStatus.rejected) &&
      this.explanation.trim()
    ) {
      this.isExplanationValid = true;
      this.dialogRef.close({ explanation: this.explanation });
    } else if (
      this.data.status === TaskStatus.inProgress &&
      this.isAffectedValid == true
    ) {
      this.dialogRef.close({});
    } else {
      this.isExplanationValid = false;
      this.isAffectedValid = false;
    }
  }

  affecedTicket(updateAssignedTo: UpdateAssignedToDto) {
    if (this.data.ticket?.id) {
      this.ticketService
        .affectedTicket(this.data.ticket?.id, updateAssignedTo)
        .subscribe({
          next: (value: Ticket) => {
            this.isAffectedValid = true;
            this.dialogRef.close({});
          },
          error: (error: HttpErrorResponse) => {
            error.message;
          },
        });
    }
  }
}
