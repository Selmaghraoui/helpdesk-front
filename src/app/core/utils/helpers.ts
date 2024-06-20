import { TaskStatus } from '../modeles/TaskStatus';
import { Ticket } from '../modeles/Ticket';

export function filterTicket(
  ticketList: Ticket[],
  filtredBy: keyof Ticket,
  status?: string | boolean | TaskStatus
) {
  return ticketList.filter((ticket) => {
    if (status === undefined) {
      return true;
    }
    return ticket[filtredBy] == status;
  });
}
