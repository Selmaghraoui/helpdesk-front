import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/core/modeles/Department';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DepartmentDto } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  isModalOpen = false;
  departmentFormGroup!: FormGroup;

  constructor(private departmentService: DepartmentService) {
    this.departmentFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.departmentService.getAllDepartment().subscribe({
      next: (departmentsList: Department[]) => {
        this.departments = departmentsList;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  // Modal
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  addDepartment() {
    const departmentDto: DepartmentDto = {
      name: this.departmentFormGroup.get('name')?.value,
    };
    this.departmentService.addDepartment(departmentDto).subscribe({
      next: () => {
        this.departments.push({
          id: 0,
          name: departmentDto.name,
          users: undefined,
        });
        this.closeModal();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  deleteDepartment(index: number, idDepartment?: number) {
    if (idDepartment != undefined)
      this.departmentService.deleteDepartment(idDepartment).subscribe({
        next: () => {
          this.departments.splice(index, 1);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }
}
