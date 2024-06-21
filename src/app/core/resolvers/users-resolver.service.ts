import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';
import { IUser } from '../modeles/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersResolverService implements Resolve<IUser> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    let userId = Number(route.paramMap.get('id'));
    return this.usersService.getUserById(userId);
  }
}
