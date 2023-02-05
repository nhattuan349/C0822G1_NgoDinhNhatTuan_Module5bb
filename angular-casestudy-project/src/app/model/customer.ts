import {CustomerType} from "./customerType";

export interface Customer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string
  customerType?: CustomerType
}
