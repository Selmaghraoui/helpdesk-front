import { Department } from './Department';
import { Ticket } from './Ticket';

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  referenceUser: string;
  image: string;
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
  // password: string;
}
