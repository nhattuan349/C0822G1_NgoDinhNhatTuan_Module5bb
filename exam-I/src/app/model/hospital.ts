import {People} from "./people";

export interface Hospital {
  id?: number,
  idHospital?: string,
  dateImport?: string,
  dateExport?: string,
  reason?: string,
  method?: string,
  doctor?: string,
  people?: People
}
