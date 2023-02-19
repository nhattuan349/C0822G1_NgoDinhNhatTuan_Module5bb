import {Teacher} from "./teacher";

export interface Class {
  id?: number;
  nameBlock?: string;
  nameClass?: string;
  numberOfMembers?: string;
  homeroomTeacher?: Teacher
}
