import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import moment from 'moment';
import MainLayout from '../../layout/Main';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Form layout="horizontal">
        <Form.Item label="Input Number" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <InputNumber size="large" min={1} max={10} style={{ width: '100%' }} defaultValue={3} />
        </Form.Item>

        <Form.Item label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Slider defaultValue={70} />
        </Form.Item>

        <Form.Item label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Select size="large" defaultValue="lucy" style={{ width: '100%' }}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
            <Select.Option value="yiminghe">Yiminghe</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="DatePicker" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <DatePicker defaultValue={moment(new Date(), 'YYYY-MM-DD')} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit" block>
            OK
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export default HomePage;
