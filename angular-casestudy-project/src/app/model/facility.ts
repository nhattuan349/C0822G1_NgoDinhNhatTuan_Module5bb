import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number,
  name?: string,
  area?: string,
  cost?: string,
  maxPeople?: string,
  standardRoom?: string,
  descriptionOtherConvenience?: string,
  poolArea?: string,
  numberOfFloor?: string,
  facilityFree?: string,
  rentTypeId?: RentType,
  facilityTypeId?: FacilityType
}
