import { AxiosPromise } from 'axios';
import { EmployeeResponse } from './employee';

export interface SuccessfulResponse extends AxiosPromise {
  flag: number;
  data: EmployeeResponse;
}