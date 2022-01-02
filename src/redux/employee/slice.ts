import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { get } from '../../utils/request';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';
import { GET_EMPLOYEE_URL } from '../../constants/urls';


export interface EmployeeState {
  status: string,
  employeeList: EmployeeResponse
}

const initialState: EmployeeState = {
  status: 'idle',
  employeeList: undefined,
}

export const getAll = createAsyncThunk(
  'employee/getAllStatus',
  async (param: EmployeeRequest, thunkAPI) => {
    const response = await get(GET_EMPLOYEE_URL, param)
    return response.data
  }
)

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: builder => {
    console.log('builder');
    
    builder
      .addCase(getAll.pending, (state, action) => {
      console.log('getAllStatus.pending');
            
        state.status = 'loading'
      })
      .addCase(getAll.fulfilled, (state, action) => {
        console.log('getAllStatus.fulfilled');

        state.employeeList = action.payload
        state.status = 'idle'
      })
  }
});

export default employeeSlice.reducer
