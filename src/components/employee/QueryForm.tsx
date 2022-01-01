import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { FormProps } from 'antd/lib/form';

import { EmployeeRequest } from '../../interface/employee';

const { Option } = Select;

interface Props extends FormProps {
  getData(param: EmployeeRequest): void;
}

const QueryForm = (props: Props) => {
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState<number | undefined>(undefined);

  useEffect(() => {
    queryEmployee({
      name,
      departmentId
    });
  }, []);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const handleDepartmentChange = (value: number) => {
    setDepartmentId(value);
  }

  const handleSubmit = () => {
    queryEmployee({
      name,
      departmentId
    });
  }

  const queryEmployee = (param: EmployeeRequest) => {
    props.getData(param);
  }
  
  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{ width: 120 }}
            allowClear
            value={name}
            onChange={handleNameChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{ width: 120 }}
            allowClear
            value={departmentId}
            onChange={handleDepartmentChange}
          >
            <Option value={1}>技术部</Option>
            <Option value={2}>产品部</Option>
            <Option value={3}>市场部</Option>
            <Option value={4}>运营部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
          >
            查询
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default QueryForm;
