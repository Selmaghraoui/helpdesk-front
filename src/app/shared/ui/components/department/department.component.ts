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

    this.getDepartments();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getDepartments() {
    const departmentsData = localStorage.getItem('departments');
    this.departments = departmentsData ? JSON.parse(departmentsData) : null;
  }

  saveDepartments(departments: Department[]): void {
    localStorage.setItem('departments', JSON.stringify(departments));
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
          id: this.departments.length + 1,
          name: departmentDto.name,
          users: undefined,
        });

        this.totalDepartments.emit(this.departments.length);
        this.saveDepartments(this.departments);
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
          this.saveDepartments(this.departments);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }
}
