
import React from 'react';
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
const Employee = (props: Props) => {

  const getTotal = () => {
    return <p>员工人数： {props.employeeList?.length || 0}</p>
  }
  
  const { onGetEmployee, employeeList } = props;
  return (
    <>
      <QueryForm getData={onGetEmployee} />
      {getTotal()}
      <Table
        columns={employeeColumns}
        dataSource={employeeList}
        className="table"
      />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Employee);
