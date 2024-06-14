import { Department } from './Department';
import { Ticket } from './Ticket';

export interface DocumentDto {
  id: number;
  documentName: string;
  contentType: string;
  size: number;
  creationDate: Date;
  data: any;
  user: any;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  referenceUser: string;
  docId: number;
  status: boolean;
  phoneNumber: string;
  post: string;
  location: string;
  aboutMe: string;
  joinDate: Date;
  enabled: boolean;
  roles: [];
  tickets: Ticket[];
  department: Department;
  document?: DocumentDto;
  // password: string;
}
