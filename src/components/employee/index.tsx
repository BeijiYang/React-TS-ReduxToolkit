
import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import QueryForm from './QueryForm';
import { employeeColumns } from './colums';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';
import { getEmployee } from '../../redux/employee';

import './index.css';

interface Props {
  onGetEmployee(param: EmployeeRequest): void;
  employeeList: EmployeeResponse
}
class Employee extends Component<Props> {

  getTotal = () => {
    return <p>员工人数： {this.props.employeeList?.length || 0}</p>
  }
  
  render() {
    const { onGetEmployee, employeeList } = this.props;
    return (
      <>
        <QueryForm getData={onGetEmployee} />
        {this.getTotal()}
        <Table
          columns={employeeColumns}
          dataSource={employeeList}
          className="table"
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Employee);
