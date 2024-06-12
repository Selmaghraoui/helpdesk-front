import { TypeActivity } from './TypeActivity';
import { IUser } from './IUser';

export interface RecentActivityUser {
  id: number;
  ativity: TypeActivity;
  idTicket: number;
  referenceTicket: string;
  time: string;
  author?: IUser;
}
