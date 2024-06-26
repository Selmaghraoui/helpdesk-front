import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modeles/IUser';
import { Ticket } from '../modeles/Ticket';
import { UserRes } from 'src/app/features/users/users.component';

@Pipe({ name: 'appFilterUsers' })
export class FilterUsersPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param users list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(users?: UserRes[], searchText?: string): UserRes[] | undefined {
    if (!searchText) {
      return users;
    }
    searchText = searchText.toLocaleLowerCase();

    return users?.filter((user) => {
      return user.username.toLocaleLowerCase().includes(searchText ?? '');
    });
  }
}
