import { badgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';
import { IUser } from './IUser';
import { TaskStatus } from './TaskStatus';
import { TypesTicket } from './TypesTicket';

export interface Ticket {
  favorite: boolean;
  id: number;
  reference: string;
  description: string;
  title: string;
  type: TypesTicket;
  status: TaskStatus;
  priority: string;
  isResolved: string;
  isFavorite: boolean;
  createdTime: Date;
  owner: badgeUser;
  assignedTo: badgeUser;
  sharedWith: badgeUser[];
  documentIds: number[];
}
