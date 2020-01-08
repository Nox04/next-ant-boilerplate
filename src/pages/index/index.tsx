import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';

const HomePage: React.FC = () => {
  return (
    <div>
      <Form layout="horizontal">
        <Form.Item label="Input Number" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <InputNumber
            size="large"
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name="inputNumber"
          />
        </Form.Item>

        <Form.Item label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Slider defaultValue={70} />
        </Form.Item>

        <Form.Item label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Select size="large" defaultValue="lucy" style={{ width: 192 }}>
            <Select.Option value="jack">jack</Select.Option>
            <Select.Option value="lucy">lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              disabled
            </Select.Option>
            <Select.Option value="yiminghe">yiminghe</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="DatePicker" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <DatePicker name="startDate" />
        </Form.Item>
        <Form.Item style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomePage;
