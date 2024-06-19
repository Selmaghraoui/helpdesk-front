import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/core/modeles/Department';
import { Role } from 'src/app/core/modeles/Role';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DepartmentDto } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  @Output() totalDepartments = new EventEmitter<number>();

  departments: Department[] = [];
  isModalOpen = false;
  departmentFormGroup!: FormGroup;
  Role = Role;
  roles: string[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getRoles();

    this.getAllDepartment();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getAllDepartment() {
    this.departmentService.getAllDepartment().subscribe({
      next: (departmentsList: Department[]) => {
        this.departments = departmentsList;
        this.totalDepartments.emit(departmentsList.length);
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
        this.totalDepartments.emit(this.departments.length);
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
          this.totalDepartments.emit(this.departments.length);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }
}
