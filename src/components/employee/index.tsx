
import React, { Component, useState } from 'react';
import { Table } from 'antd';

import QueryForm from './QueryForm';
import { employeeColumns } from './colums';
import { EmployeeResponse } from '../../interface/employee';

import './index.css';

interface State {
  employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
  state: State = {
    employee: undefined
  }

  getTotal = () => {
    return <p>员工人数： {this.state.employee?.length || 0}</p>
  }

  setEmployee = (employee: EmployeeResponse) => {
    this.setState({ employee })
  }
  
  render() {
    return (
      <>
        <QueryForm onDataChange={this.setEmployee} />
        {this.getTotal()}
        <Table
          columns={employeeColumns}
          dataSource={this.state.employee}
          className="table"
        />
      </>
    );
  }
}

export default Employee;
