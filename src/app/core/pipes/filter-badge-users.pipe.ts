import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modeles/IUser';
import { Ticket } from '../modeles/Ticket';
import { badgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';

@Pipe({ name: 'appFilterBadgeUsers' })
export class FilterBadgeUsersPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param users list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(users?: badgeUser[], searchText?: string): badgeUser[] | undefined {
    if (!searchText) {
      return users;
    }
    searchText = searchText.toLocaleLowerCase();

    return users?.filter((user) => {
      return user.username.toLocaleLowerCase().includes(searchText ?? '');
    });
  }
}
