import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../modeles/Ticket';

@Pipe({ name: 'appFilterTickets' })
export class FilterTicketsPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param users list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(users?: Ticket[], searchText?: string): Ticket[] | undefined {
    if (!searchText) {
      return users;
    }
    searchText = searchText.toLocaleLowerCase();

    return users?.filter((user) => {
      return user.title.toLocaleLowerCase().includes(searchText ?? '');
    });
  }
}
