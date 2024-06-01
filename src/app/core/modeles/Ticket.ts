import { IUser } from './IUser';
import { TaskStatus } from './TaskStatus';
import { TypesTicket } from './TypesTicket';

export interface Ticket {
  id?: number;
  referenceTicket?: string;
  title?: string;
  description?: string;
  type?: TypesTicket;
  priority?: string;
  status?: TaskStatus;
  createdBy?: IUser;
  createdTime?: string;
  affectedTo?: IUser;
  sharedWith?: IUser[];
  isResolved?: boolean | undefined;
  isFavorit?: boolean;
}
