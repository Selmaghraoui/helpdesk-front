import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../modeles/IUser';
import { UserRes } from 'src/app/features/users/users.component';

export interface DepartmentDto {
  name: string;
}
export interface UserReqPassword {
  password: string;
}
export interface ICreateUser {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  departmentDto: DepartmentDto;
}
export interface IUpdateUser {
  firstName: String;
  lastName: String;
  post: String;
  phoneNumber: String;
  location: String;
  aboutMe: String;
  departmentDto: DepartmentDto;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:8082/users';

  constructor(private http: HttpClient) {}

  /*
   * Logged In
   */
  getMe(): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/loggedIn');
  }

  /*
   * Auth to get Roles
   */
  getRole() {
    return this.http.get(this.url + '/auth');
  }

  /*
   * Create User
   * Register
   */
  createUser(createUser: ICreateUser): Observable<any> {
    return this.http.post(this.url + '/register', createUser);
  }

  /*
   * Get All Users
   */
  getAllUsers(): Observable<Array<UserRes>> {
    return this.http.get<Array<UserRes>>(this.url + '/');
  }

  /*
   * Get User By Id
   */
  getUserById(idUser: number): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/' + idUser);
  }

  /*
   * Desactivate User
   */
  desactivateUser(idUser: number): Observable<any> {
    return this.http.put<any>(this.url + '/desactivate/' + idUser, {});
  }

  /*
   * Update User
   */
  updateUser(idUser: number, updateUser: IUpdateUser): Observable<IUser> {
    return this.http.put<IUser>(this.url + '/' + idUser, updateUser);
  }

  /*
   * Update Password User
   */
  updatePasswordUser(userReqPassword: UserReqPassword): Observable<any> {
    return this.http.put<any>(this.url + '/update-password', userReqPassword);
  }
}
