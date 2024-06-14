import { IUser } from './IUser';
import { TaskStatus } from './TaskStatus';
import { TypesTicket } from './TypesTicket';

export interface Ticket {
  id: number;
  reference: string;
  description: string;
  title: string;
  type: TypesTicket;
  status: TaskStatus;
  priority: string;
  isResolved: boolean | undefined;
  favorite: boolean;
  createdTime: Date;
  owner: IUser;
  assignedTo: IUser;
  sharedWith: IUser[];
  resolved?: boolean | undefined;
}
