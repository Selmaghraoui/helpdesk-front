import { IUser } from './IUser';
import { TypesTicket } from './TypesTicket';

export interface Ticket {
  id: number;
  title: string;
  type: TypesTicket;
  priority: string;
  status: string;
  createdBy: IUser;
  createdTime: string;
  affectedTo: IUser;
}
