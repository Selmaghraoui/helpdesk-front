export interface IUser {
  id: number;
  referenceUser?: string;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
  post: string;
  department: string;
  phoneNumber: string;
  userName?: string;
  isActivate: boolean;
}
