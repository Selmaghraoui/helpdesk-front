import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../modeles/Department';
import { DepartmentDto } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  url = 'http://localhost:8082/api/department';

  constructor(private http: HttpClient) {}

  getAllDepartment(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(this.url);
  }

  addDepartment(department: DepartmentDto) {
    return this.http.post(this.url, department);
  }

  deleteDepartment(idDepartment: number) {
    return this.http.delete(this.url + '/' + idDepartment);
  }
}
