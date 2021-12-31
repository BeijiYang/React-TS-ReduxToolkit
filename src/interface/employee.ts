export interface EmployeeRequest {
  name: string;
  departmentId: number | undefined;
}

interface EmployeeInfo {
  id: number;
  key: number;
  name: string;
  department: string;
  hiredDate: string;
  level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined;
