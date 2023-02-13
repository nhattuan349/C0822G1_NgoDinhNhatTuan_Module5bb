import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id?: number,
  startDate: string,
  endDate: string,
  deposit: string,
  customerId: Customer
  facilityId: Facility
}
